const { Router } = require("express");
const { UserModel } = require("../Models/UserModel");

const AuthRouter = Router();
AuthRouter.post("/signup" ,(req,res)=>{

    const { name, email, password } = req.body;

    const newstudent = new UserModel({
      name,
      email,
      password,
    });
    console.log(newstudent);
    try {
      newstudent.save();
      res.send({ msg: "Sign up Sucessfully"  , student:newstudent});
    } catch {
      res.send({ msg: "Error in Signup" });
    }

});
AuthRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const student = await UserModel.findOne({ email });
  if (!student) {
    return res.send({ msg: "Invalid Credentials" });
  } else {
    if (student.password === password) {
      return res.send({
        messege: "Login Sucessful",
        student:student
      });
    }
  }
});




module.exports = { AuthRouter };
