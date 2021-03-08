const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 30000,
      keepAlive: true,
      autoIndex: true,
      dbName: "expensetracker",
    });
    console.log(
      `MongoDB connected:${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error : ${err.massage}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
