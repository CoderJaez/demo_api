const { get, post, put, remove } = require("../controllers/user.controller");
const { Router } = require("express");
const router = Router();

router
  .get("/", get)
  .get("/:id", get)
  .post("/", post)
  .put("/:id", put)
  .delete("/:id", remove);
module.exports = router;
