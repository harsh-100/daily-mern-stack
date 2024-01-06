const jwt = require("jsonwebtoken");

const authorizationCheck = async (req, res, next) => {
  let token = req.headers.authorization;

  // verify a token symmetric
  await jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
    if (err) {
      res.send("Not authorized");
    }

    let userId = decoded.data._id;

    req.userId = userId;

    next();
  });

  //   if (token == 12345) {
  //     next();
  //   } else {
  //     res.send("Not authorized");
  //   }
};

module.exports = { authorizationCheck };
