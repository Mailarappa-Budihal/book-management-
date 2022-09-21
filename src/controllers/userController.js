const UserModel = require("../models/userModel")
const { isValid, regxMobile, regxEmail, regxPassword, regxPincode, regxName } = require("../validators/validator")

//=================~~~~~~~~~~~~~~~~~~(createUser)~~~~~~~~~~~~~~~~~~~===========================


const createUser = async function(req, res) {
    try {

        let data = req.body
            //destructuring
        let { title, name, phone, email, password, address } = data

        //validation starts
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, message: "please enter user data" })
        }
        if (!isValid(title) || title != "Mr" && title != "Mrs" && title != "Miss") {
            return res.status(400).send({ status: false, message: "please enter title in Mr,Mrs,Miss" })
        }

        if (!isValid(name)) {
            return res.status(400).send({ status: false, message: "please enter name" })
        }
        if (!regxName.test(name)) {
            return res
                .status(400)
                .send({ message: "Please enter name in aplhabets" });
        }


        if (!isValid(phone)) {
            return res.status(400).send({ status: false, message: "please enter phone no " })
        }
        if (!regxMobile.test(phone)) {
            return res
                .status(400)
                .send({ message: "Please enter valid Mobile Number" });
        }
        let dupMobile = await UserModel.findOne({ phone: phone })
        if (dupMobile) {
            return res.status(400).send({ status: false, message: "phone no  is already used please provide another phone no" })
        }

        if (!isValid(email)) {
            return res.status(400).send({ status: false, message: "please enter emailId" })
        }

        if (!regxEmail.test(email))
            return res
                .status(400)
                .send({ status: false, message: "Enter Valid Email" });

        let dupEmail = await UserModel.findOne({ email: email })
        if (dupEmail) {
            return res.status(400).send({ status: false, message: "emailId is already used please provide another emailId" })

        }


        if (!isValid(password)) {
            return res.status(400).send({ status: false, message: "please enter password" })
        }

        if (!regxPassword.test(password)) {
            return res
                .status(400)
                .send({
                    status: false,
                    msg: "password contain at least 8 chracter like: aQ1@asd5",
                });
        }


        if (address) {
            if (!isValid(address.street || address.city || address.pincode))
                return res.status(400).send({ status: false, message: "please enter address inproper format" })
        }
        if (!regxName.test(address.city)) {
            return res.status(400).send({ status: false, message: "please enter the valid city" })
        }

        if (!regxPincode.test(address.pincode)) {
            return res
                .status(400)
                .send({ message: "Please enter valid pincode " });
        }
        //validation end


        //checking for duplicacy
        let createUser = await UserModel.create(data)
        return res.status(201).send({ status: true, message: "user created successfilly", data: createUser })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}



module.exports.createUser = createUser