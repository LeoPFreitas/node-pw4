const userController = require('../controller/userController');
const router = require("express").Router();

router.post("/create", userController.create);
router.post("/update/:id", userController.update)
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.delete("/:id", userController.delete);
router.post("/login", userController.login);

module.exports = router;