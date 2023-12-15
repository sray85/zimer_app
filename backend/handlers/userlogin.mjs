import signupData from "../models/signup.mjs";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config("../.env");

function UserLogIn(req, res) {
  console.log("posting from user login");
  const logindata = req.body;
  const mail = logindata.username;
  const passWrd = logindata.password;

  const email = crypto
    .createHash("sha256")
    .update(process.env.KEY + mail)
    .digest("hex");

  const password = crypto
    .createHash("sha256")
    .update(process.env.KEY + passWrd)
    .digest("hex");

  const userLogInData = signupData;
  if (email === "" || password === "") {
    console.log("username/password is missing");
    res.json({ message: "username/password is missing", status: false });
  } else {
    userLogInData
      .findOne({ email })
      .then((result) => {
        if (result) {
          userLogInData.findOne({ password }).then((result) => {
            if (result) {
              console.log(
                "user name and password is correct , login status succsess"
              );
              res.json({
                message: "user name and password is correct",
                login_status: true,
                userdata: result,
              });
            } else {
              console.log("incorrect password");
              res.json({ message: "inccorect password", login_Status: false });
            }
          });
        } else {
          console.log("incorrect user");
          res.json({ message: "inccorect user", login_Status: false });
        }
      })
      .catch((Error) => console.log(Error));
  }
}

export default { UserLogIn };
