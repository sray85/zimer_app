import signupData from "../models/signup.mjs";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config("../.env");

function UserLogIn(req, res) {
  console.log("posting from user login");
  const logindata = req.body;
  const userLogInData = signupData;
  const email = logindata.username;
  const passWrd = logindata.password;

  const password = crypto
    .createHash("sha256")
    .update(process.env.KEY + passWrd)
    .digest("hex");

  if (email === "" || password === "") {
    console.log("username/password is missing");
    res.json({ message: "username/password is missing", status: false });
  } else {
    userLogInData
      .findOne({ email })
      .then((result) => {
        if (!result) {
          console.log("Invaleid User");
          res.json({ message: "Invaleid User", loginStaus: false });
        } else {
          if (result.password !== password) {
            console.log("Inalied Password");
            res.json({
              message: "User Login Failed",
              loginStatus: false,
              userdata: result,
            });
          } else {
            console.log("User Login Succsess");
            res.json({
              message: "User Login Succsess",
              loginStatus: true,
              userdata: result,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: err });
      });
  }
}

export default { UserLogIn };
