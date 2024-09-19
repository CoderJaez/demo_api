const express = require("express");
const app = express();

app.use(express.json());
app.get("/", function (req, res) {
  res.send("Hello API.");
});

app.post("/", async (req, res) => {
  console.log(req.body);
  return res.status(200).send("Ok");
});

app.use("*", function (req, res) {
  res.status(404).json({ message: "URL not found." });
});

app.listen(3000, function () {
  console.log("Server is listening at port 3000.");
});
