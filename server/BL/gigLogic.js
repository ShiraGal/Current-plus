// הצגת כל הגיגים לפי משתמש, הוספת גיג, מחיקת גיג, (שינויבתוך גיג?), חיפוש גיג- הצגה לפי פילטר מסויים

// require('../db').myConnect();
const gigController = require("../DL/controllers/gigController.js")
const jwtFn = require("./jwt");

// -------------------------------------------------------------------------------getAllMyGigs
async function getAllMyGigs(userId){     
    console.log("gig logic getAllMyGigs: userId=====>   ",userId);
    const allGigs = await gigController.readAllByUser(userId)
    const gigs = allGigs.filter((gig)=> gig.isActive==true)
    if(gigs.length < 1){
        console.log("no gigs");
        throw { code: 400, message: "no gigs" };
    }
    else{
        console.log(gigs);
        return gigs
    }
}

// ------------------------------------------------------------------------------createGig
async function createGig(data, user_Id){   
   const gig = await gigController.create({userId : user_Id, client : data.client, details : data.details, payment : data.payment, date : data.date})
    console.log(gig);
    return(gig)
}
// ------------------------------------------------------------------------------updateGig
async function updateGig(gigId, update){
        res = await gigController.update({_id : gigId}, update)
    console.log("done  :"+res);
}


// ------------------------------------------------------------------------------

module.exports = { getAllMyGigs, createGig, updateGig}