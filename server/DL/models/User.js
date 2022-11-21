
// require('../../db').myConnect();
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        select: false,
      },
    email: {
        type: String,
        required: true,
        unique: true,
      }
})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel           


// let User1 = {
//   userName: "yifatHirst",
//   password: "2222",
//   email: "yifat@gmail.com"
// }

// async function create(data){
//   console.log("create!!");
//     const res = await userModel.create(data);
//     console.log(res);
// }
// create(User1);
