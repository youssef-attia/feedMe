const mongoose = require('mongoose')

const Schema = mongoose.Schema

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({
    username:{
        type:String,
        required: 'Username is required',
        unique:true,
        trim: true,
        minlength:3
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    password:{
        type:String,
        required: 'Password is required',
        trim: true,
        minlength:3
    },
    name:{
        type:String,
        required: 'Profile name is required',
    },
    profilePic:{
        type:String,
    },
    likes:{
        type:Array,
    },
},{
    timestamps:true,
})

const User = mongoose.model('User', userSchema)

module.exports = User;