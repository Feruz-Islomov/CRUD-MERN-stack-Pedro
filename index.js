const express = require("express");
const userRoutes = require("./router/userRouter");
const cors = require("cors");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const Food = require("./models/Food");
const { notFound, errorHandler } = require("./middlewares/middleware");
// const { deleteOne } = require("./models/blog");
//connect to mongodb
const dbURI =
  "mongodb+srv://newUser:3397998f@crud.dot0x.mongodb.net/pedroFoods?retryWrites=true&w=majority";
mongodb+srv://newUser:3397998f@crud.dot0x.mongodb.net/products?retryWrites=true&w=majority
const app = express();
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);
app.post("/insert", async (req, res) => {
  console.log(req.body);
  const foodName = req.body.foodName;
  const days = req.body.days;
  const food = new Food({ foodName: foodName, day: days });
  try {
    await food.save();
    res.send("inserted data");
  } catch (err) {
    console.log("not saved");
  }
});

app.get("/read", (req, res) => {
  Food.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.put("/update", async (req, res) => {
  const newName = req.body.newName;
  const id = req.body.id;
  console.log(req.body);
  try {
    await Food.findById(id, (error, updatedVal) => {
      if (error) {
        console.log("error from finbyid");
      }
      updatedVal.foodName = newName;
      updatedVal.save();
      res.send("updated");
    });
    //////////another simple way
    // const aline = await Food.findById(id);
    // console.log(aline);
    // aline.foodName = newName;
    // const a1 = await aline.save();
    // res.send(a1);
  } catch (err) {
    console.log("error happaned");
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`from delete: ${id}`);
  await Food.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
