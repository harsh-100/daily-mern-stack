const UserModel = require("../model/userModel");

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
      age: newItem.age,
      title: newItem.title,
    });

    await newUser.save();
    // newItem.id = users.length + 1;
    // users.push(newItem);

    res.status(201).send(newUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
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
};
