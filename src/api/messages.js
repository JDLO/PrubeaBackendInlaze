const MessageController = require('../controllers/messages');
const express = require('express')

const router = express.Router();

router.get("", MessageController.findAllMessages);
router.get("/:id", MessageController.findByIdMessage);
router.post("", MessageController.addMessage);
router.put("/:id", MessageController.updateOneMessage);
router.delete("/:id", MessageController.deleteByIdMessage);

module.exports = router;
