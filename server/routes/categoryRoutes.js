const express = require("express");
const {
  create,
  getAll,
  getByValue,
  update,
  remove,
} = require("../controllers/categoryController");
const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:value", getByValue);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
