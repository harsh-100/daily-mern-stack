const { default: mongoose } = require("mongoose");

const connectDb = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("Connected successfully newone ");
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log("Not connected", error);
    process.exit(1);
    // process.on("exit", () => {
    //   console.log(`Proccess is exitted with error ${error.message}`);
    // });
  }
};

module.exports = connectDb;
