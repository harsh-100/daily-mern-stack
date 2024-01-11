const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUser = (req, res) => {
  res.send("User route");
};

const addUser = async (req, res) => {
  try {
    const userData = req.body;
    const saltRounds = 10;
    let hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    let newUser = new UserModel({
      //   email:userData.email,
      //   password:userData.password,
      //   username:userData.username,
      //   role:userData.role

      ...userData,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("🚀 ~ addUser ~ userData:", userData);

    let messageData = {
      message: "User added successfully",
      status: 200,
      data: newUser,
    };
    res.status(200).send(messageData);
  } catch (error) {
    let messageData = {
      message: error.message,
      status: 404,
      data: error,
    };
    res.status(404).send(messageData);
  }
};

const loginUser = async (req, res) => {
  try {
    let userLoginData = req.body;

    let userData = await UserModel.findOne({ email: userLoginData.email });
    console.log("🚀 ~ loginUser ~ userData:", userData);

    if (userData) {
      // check password
      let isPasswordCorrect = await bcrypt.compare(
        userLoginData.password,
        userData.password
      );

      if (isPasswordCorrect) {
        // assign token
        let token = jwt.sign(
          {
            _id: userData._id,
            role: userData.role,
          },
          "secret",
          { expiresIn: 60 * 60 }
        );

        let messageData = {
          message: "User Logged in successfully",
          status: 200,
          data: { token },
        };

        res.status(200).send(messageData);
      } else {
        // send from here

        res.send("Invalid Credentials");
      }
    } else {
      res.send("User does not exist");
    }
  } catch (error) {
    let messageData = {
      message: error.message,
      status: 404,
      data: error,
    };
    res.status(404).send(messageData);
  }
};

module.exports = { getAllUser, addUser, loginUser };
