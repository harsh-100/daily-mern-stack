const UserModel = require("../model/userModel");

const jwt = require("jsonwebtoken");

const users = [
  { id: 1, name: "John", email: "johan@gmail.com" },
  { id: 2, name: "Joker", email: "johan@gmail.com" },
  { id: 3, name: "Rohan", email: "johan@gmail.com" },
  { id: 4, name: "Sohan", email: "johan@gmail.com" },
  { id: 5, name: "Mohan", email: "johan@gmail.com" },
];

const getAllUsers = async (req, res) => {
  let userData = await UserModel.find();

  console.log("The length of userData is ", userData.length);
  res.send(userData);
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    // let userData = users.find((eachObj) => eachObj.id == userId);
    let userData = await UserModel.findById(userId);

    if (userData) {
      res.status(200).send(userData);
    } else {
      res.status(404).send("Please Provide correct user Id");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const addNewUser = async (req, res) => {
  try {
    const newItem = req.body;

    let newUser = new UserModel({
      name: newItem.name,
      email: newItem.email,
      password: newItem.password,
      age: newItem.age,
      phone: newItem.phone,
    });

    await newUser.save();
    // newItem.id = users.length + 1;
    // users.push(newItem);

    res.status(201).send(newUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const userLogin = async (req, res) => {
  let userEntry = req.body;

  let userData = await UserModel.find({ email: userEntry.email });
  console.log(
    "🚀 ~ file: userController.js:65 ~ userLogin ~ userData:",
    userData
  );

  if (userData.length > 0) {
    let databasePassword = userData[0].password;

    console.log(userData[0]);
    if (databasePassword == userEntry.password) {
      // generate jwt token

      let token = jwt.sign(
        {
          data: {
            _id: userData[0]._id,
            name: userData[0].name,
            email: userData[0].email,
          },
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 60 * 60 }
      );

      res.send({ token });
    } else {
      res.send("invalid credentials");
    }
  } else {
    res.send("User does not exist");
  }

  // res.send("login");
};

const updateUserData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = req.body;

    // let index = users.findIndex((eachObj) => eachObj.id == userId);

    let updatedUser = await UserModel.findByIdAndUpdate(userId, userData);
    if (updatedUser) {
      // users[index].name = userData.name;
      res.send(updatedUser);
    } else {
      res.send("Please give proper id bhai ");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    let userDeleted = await UserModel.findByIdAndDelete(userId);

    // let index = users.findIndex((eachObj) => eachObj.id == userId);

    if (userDeleted) {
      // let userDeleted = users.splice(index, 1);
      res.send(userDeleted);
    } else {
      res.send("Please give proper id bhai ");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserData,
  deleteUserById,
  userLogin,
};
