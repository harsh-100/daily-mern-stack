const jwt = require("jsonwebtoken");

const authCheck = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      res.send("Please Provide token");
      return;
    }
    let result = await jwt.decode(token, "secret");
    console.log("🚀 ~ authCheck ~ result:", result);

    req.userId = result._id;
    req.userRole = result.role;

    //   req

    console.log(token);

    next();
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = authCheck;
