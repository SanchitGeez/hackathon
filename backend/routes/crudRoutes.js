const express = require("express");
const router = express.Router();
const crudController = require("../controllers/crudController.js");

router.get("/api/cruds", crudController.crud_index);
router.post("/api/cruds", crudController.crud_create_post);
router.get("/api/cruds/:id", crudController.crud_details);
router.patch("/api/cruds/:id", crudController.crud_update);
router.delete("/api/cruds/:id", crudController.crud_delete);

module.exports = router;