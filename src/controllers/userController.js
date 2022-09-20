const UserModel = require("../models/userModel")
const validator = require("../validators/validator")

//=================~~~~~~~~~~~~~~~~~~(createUser)~~~~~~~~~~~~~~~~~~~===========================


const createUser = async function (req, res) {
    try {

        let data = req.body
        //destructuring
        let { title, name, phone, email, password, address, pincode } = data

        //validation starts
        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, message: "please enter user data" })
        }
        if (!validator.isValid(title)) {
            return res.status(400).send({ status: false, message: "please enter title" })
        }
        if (!validator.isValidTitle(title)) {
            return res.status(400).send({ status: false, msg: "Please enter a valid title,e.g['Mr','Mrs','Miss']" })
        }

        if (!validator.isValid(name)) {
            return res.status(400).send({ status: false, message: "please enter name" })
        }


        if (!validator.isValid(phone)) {
            return res.status(400).send({ status: false, message: "please enter phone no " })
        }
        const regMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (!regMobile.test(mobile)) {
            return res
                .status(400)
                .send({ message: "Please enter valid Mobile Number" });
        }
        if (!validator.isValid(email)) {
            return res.status(400).send({ status: false, message: "please enter emailId" })
        }
        const regx = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (!regx.test(email))
            return res
                .status(400)
                .send({ status: false, message: "Enter Valid Email" });


        if (!validator.isValid(password)) {
            return res.status(400).send({ status: false, message: "please enter password" })
        }

        const regxpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        if (!regxpassword.test(password)) {
            return res
                .status(400)
                .send({
                    status: false,
                    msg: "password contain at least 8 chracter like: aQ1@asd5",
                });
        }


        if (!validator.isValid(address)) {
            return res.status(400).send({ status: false, message: "please enter address" })
        }
        if (!validator.isValid(pincode)) {
            return res.status(400).send({ status: false, message: "please enter title" })
        }

        const regpincode = /^(\+\d{1,3}[- ]?)?\d{6}$/;
        if (!regpincode.test(pincode)) {
            return res
                .status(400)
                .send({ message: "Please enter valid pincode " });
        }
        //validation end


        //checking for duplicacy

        let dupEmail = await UserModel.findOne({ email: email })
        if (dupEmail) {
            return res.status(400).send({ status: false, message: "emailId is already used please provide another emailId" })

        }
        let dupPhone = await UserModel.findOne({ phone: phone })
        if (dupPhone) {
            return res.status(400).send({ status: false, message: "phone no  is already used please provide another phone no" })
        }
        let createUser = await UserModel.create(data)
        return res.status(201).send({ status: true, message: "user created successfilly", data: createUser })
    }
    catch (error) {
        return res.status(500).send({ message: error.message })
    }
}



module.exports.createUser = createUser