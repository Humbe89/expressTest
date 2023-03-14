const mongoose = require("mongoose");
const HOST = process.env.HOST;

const dbConnection = async () => {
  try {
    await mongoose.connect(HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false
    });
    console.log("Connected to Mongoose");
  } catch (error) {
    console.log(error);
    throw new Error("Error while connecting to Mongo");
  }
};

module.exports = {
  dbConnection,
};
