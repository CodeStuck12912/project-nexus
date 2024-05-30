const mongoose = require('mongoose');

//nexusinfo, nexusinfo123
const url = "mongodb+srv://nexusinfo:nexusinfo123@testclusterviraj.gqrz7wk.mongodb.net/Nexus-project";

mongoose.connect(url);

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
});

const Login = mongoose.model('users', loginSchema);

module.exports = Login;