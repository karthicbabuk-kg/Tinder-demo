const express = require('express');
const {
  getUser,
  addUserMatch,
  getAllUsers,
  getGenderedUsers,
  updateUser,
} = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/user', authenticateToken, getUser);
router.put('/addmatch', authenticateToken, addUserMatch);
router.get('/users', authenticateToken, getAllUsers);
router.get('/gendered-users', authenticateToken, getGenderedUsers);
router.put('/user', authenticateToken, updateUser);

module.exports = router;
