const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const connection = require("./configs/database");
// routers
const userRouter = require("./routes/user.route");

app.use(
  cors({
    origin: "*",
    supports_credentials: true,
    allowedHeaders: [
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Header",
      "Access-Control-Expose-Headers",
      "Content-Range",
      "Content-Length",
      "Connection",
      "Content-Type",
      "X-Content-Type-Options",
      "Set-Cookies",
      "*",
    ],
    exposedHeaders: ["x-access-token", "x-refresh-token"],
  })
);

//localhost:3000/users
app.use("/users", userRouter);

app.use("*", function (req, res) {
  res.status(404).json({ message: "URL not found." });
});

app.listen(3000, function () {
  console.log("Server is listening at port 3000.");
  // connection.connect((err) => {
  //   if (err) {
  //     console.log("Database connection failed: ", err.message);
  //     return;
  //   }

  //   console.log("Database connection success!");
  // });
});
