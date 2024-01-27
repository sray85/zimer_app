import signupSchema from "../models/signup.mjs";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config("../.env");

function userSignUp(req, res) {
  console.log("posting from user signup");
  const userdata = req.body;
  const userSignUpData = signupSchema;

  const email = userdata.mail;
  const passWrd = userdata.password;

  // const email = crypto
  //   .createHash("sha256")
  //   .update(process.env.KEY + mail)
  //   .digest("hex");

  const password = crypto
    .createHash("sha256")
    .update(process.env.KEY + passWrd)
    .digest("hex");

  const userDataObj = {
    firstname: userdata.fname,
    lastname: userdata.lname,
    email: email,
    password: password,
    phonenumber: userdata.phonenumber,
  };

  userSignUpData.findOne({ email }).then((result) => {
    if (result) {
      console.log("user is already exsits");
      res.json({ message: "user is already exsits" });
    } else {
      userSignUpData
        .insertMany(userDataObj)
        .then((result) => {
          if (result) {
            console.log("user signup done ");
            res.json({
              message: "user signup done ",
              signup_status: true,
              userdata: result,
            });
          }
        })
        .catch((error) => console.log(error));
    }
  });
}

export default { userSignUp };
