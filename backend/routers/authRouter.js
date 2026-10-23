const express = require('express')
const router = express.Router() 

const {register,login} = require('../controllers/authController.js')
const authenticateToken = require('../middlewares/authMiddleware.js')

router.post('/register',register) 
router.post('/login',login)
router.get('/user',authenticateToken)

module.exports = router