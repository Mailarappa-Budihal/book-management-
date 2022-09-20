const express = require('express');
const bodyparser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyparser.json());
mongoose.connect("mongodb+srv://1729ankit:MSfnlOw77aSsseHm@cluster0.g9nthlr.mongodb.net/group69Database?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
)
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


//app.use('/',route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port' + (process.env.PORT || 3000))
});
