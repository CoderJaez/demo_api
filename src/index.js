const express = require("express");
const app = express();

app.use(express.json());
// routers
const userRouter = require("./routes/user.route");

app.get("/", function (req, res) {
  res.send("Hello API.");
});

app.post("/", async (req, res) => {
  console.log(req.body);
  return res.status(200).send("Ok");
});
//localhost:3000/users
app.use("/users", userRouter);

app.use("*", function (req, res) {
  res.status(404).json({ message: "URL not found." });
});

app.listen(3000, function () {
  console.log("Server is listening at port 3000.");
});
