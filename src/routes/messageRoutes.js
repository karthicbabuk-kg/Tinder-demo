const express = require('express');
const {
  getMessages,
  addMessage,
} = require('../controllers/messageController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/messages', authenticateToken, getMessages);
router.post('/message', authenticateToken, addMessage);

module.exports = router;
