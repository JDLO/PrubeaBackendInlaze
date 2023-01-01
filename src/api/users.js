const UserController = require('../controllers/users');
const express = require('express')

const router = express.Router();

router.get("", UserController.findAllUsers);
router.get("/:id", UserController.findByIdUser);
router.post("", UserController.addUser);
router.put("/:id", UserController.updateOneUser);
router.delete("/:id", UserController.deleteByIdUser);

module.exports = router;
