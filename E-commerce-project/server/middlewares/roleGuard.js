const roleGuard = (allowedRole) => {
  return (req, res, next) => {
    // if (req.userRole == allowedRole) {
    if (allowedRole.includes(req.userRole)) {
      next();
    } else {
      res.send("Not authorized for this request");
    }
  };
};

module.exports = roleGuard;

// role guard ko optimize krna
// postman mai global key value set krna
// delete a user (for only admin)
// find all sellers and find all users
