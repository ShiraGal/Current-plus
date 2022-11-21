// להרשם, להיכנס
// require('../DL/db').myConnect();
const userController = require("../DL/controllers/userController.js")
const jwtFn = require("./jwt");


// ---------------------------------------------------------------------register
async function register(user){
    const { email, password, userName } = user;
    if (!email || !password || !userName){
        // console.log("missing data");
        throw { code: 400, message: "missing data" };
    }
    const exsistUser = await userController.readOn({ email: email });
    if (exsistUser.length > 0) {
        console.log("duplicated email");
      throw { code: 400, message: "duplicated email" };
    }
    else{
       userController.create(user);
       const token = jwtFn.createToken(user._id);
       return {
        code: 200,
        msg: user[0],
        token: token,
      };
    }
}

// ---------------------------------------------------------------------login
async function login(data){
    console.log("login logic:   "+data.password);
    const user = await userController.readOn({email : data.email}, "+password")
    console.log("user ====>  "+user[0]);
    if(user.length<1){
        // console.log("user does not exist");
        throw { code: 400, message: "user does not exist" };
    }
    if(data.password !== user[0].password){
        // console.log("not password");
        throw { code: 400, message: "wrong password" };
    }
    else{
        console.log(user[0]._id);
        const token = jwtFn.createToken(user[0]._id);
        return {
            code: 200,
            msg: user[0],
            token: token,
          };
    }
}
// login({
// email : "dor@gmail.com",
// password : "1111"
// })
// ---------------------------------------------------------------------

module.exports = {register , login}
