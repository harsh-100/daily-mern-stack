const { BlogsModel } = require("../model/blogsModel");
const UserModel = require("../model/userModel");

const getAllBlogs = async (req, res) => {
  try {
    let blogData = await BlogsModel.find().populate("userId");

    // let newData = await blogData.map(async (eachObj) => {
    //   let data = await UserModel.findById(eachObj.userId);

    //   eachObj.userData = data;

    //   return eachObj;
    // });

    res.send(blogData);
  } catch (error) {
    res.status(404).send(error);
  }
};

const addBlog = async (req, res) => {
  const postData = req.body;

  const newBlog = new BlogsModel({
    title: postData.title,
    description: postData.description,
    userId: postData.userId,
  });

  await newBlog.save();
  console.log(postData);

  res.send(newBlog);
};

module.exports = { getAllBlogs, addBlog };
// commonjs

// ecma script

// module.exports = { getAllBlogs };
