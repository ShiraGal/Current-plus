// require('../../db').myConnect();

const mongoose = require('mongoose')

const gigSchema = new mongoose.Schema({
    date : {
        type : Date, 
        required: true,
        default: Date.now
    },
    client : {
        type: String
    },
    details : {
        type: String
    },
    payment : {
        type : Number
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        required: true
        },
    paidup : {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
      }
})

const gigModel = mongoose.model("Gig", gigSchema);
module.exports = gigModel

// let gig1 = {
//     client : "A.K.M.",
//     payment : 9000,
//     userId : "63677a88a0fd3440d5f04c7a"
// }


// async function create(data){
//   console.log("start create gig!!");
//     const res = await gigModel.create(data);
//     console.log(res);
// }
// create(gig1);

