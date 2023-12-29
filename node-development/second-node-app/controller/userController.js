const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Joker" },
  { id: 3, name: "Rohan" },
  { id: 4, name: "Sohan" },
  { id: 5, name: "Mohan" },
];

const getAllUsers = (req, res) => {
  res.send(users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.userId);

  let userData = users.find((eachObj) => eachObj.id == userId);

  if (userData) {
    res.status(200).send(userData);
  } else {
    res.status(404).send("Please Provide correct user Id");
  }
};

const addNewUser = (req, res) => {
  const newItem = req.body;
  newItem.id = users.length + 1;
  users.push(newItem);
  res.status(201).send(newItem);
};

const updateUserData = (req, res) => {
  const userId = parseInt(req.params.userId);
  const userData = req.body;

  let index = users.findIndex((eachObj) => eachObj.id == userId);

  if (index != -1) {
    users[index].name = userData.name;
    res.send(users[index]);
  } else {
    res.send("Please give proper id bhai ");
  }
};

const deleteUserById = (req, res) => {
  const userId = parseInt(req.params.userId);
  let index = users.findIndex((eachObj) => eachObj.id == userId);

  if (index != -1) {
    let userDeleted = users.splice(index, 1);
    res.send(userDeleted);
  } else {
    res.send("Please give proper id bhai ");
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserData,
  deleteUserById,
};
