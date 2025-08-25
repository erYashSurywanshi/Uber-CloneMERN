const mongoose = require("mongoose");
const captainModel = require("./models/captain.model"); // सही path डालना

require("dotenv").config();

async function debug() {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("✅ MongoDB Connected");

    const captains = await captainModel.find({});
    console.log("Total captains:", captains.length);

    captains.forEach((c, i) => {
      console.log(`Captain ${i + 1}:`, c.location);
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

debug();
