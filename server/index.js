const express = require("express");

//cP8Fj8XVI8UIsXqv

//mongodb+srv://new-user_31:<password>@mern-app.ztkdk.mongodb.net/test
const mongoose = require("mongoose");

const FoodModel = require("./models/Food");
const app = express();

mongoose
  .connect(
    "mongodb+srv://new-user_31:cP8Fj8XVI8UIsXqv@mern-app.ztkdk.mongodb.net/food?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("database connection successful");
  });
app.use(express.json());

app.get("/", async (req, res) => {
  const food = new FoodModel({
    foodName: "Apple",
    daysSinceIAte: 3,
  });

  try {
    await food.save().then((result) => {
      console.log(result);
      res.send("record inserted");
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("server running at port 3001");
});
