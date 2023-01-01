const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log('Request ', req.body, password )

    if (!(email && password)) {
      return res.status(400).json({ message: ' email & Password are required!' });
    }

    let user;

    try {
      user = await User.findOne({ email: email });
    } catch (err) {
      return res.status(400).json({ message: ' email is incorecct!' });
    }

    // Check password
    console.log('user', user)
    if (user.checkPassword(password)) {
      return res.status(400).json({ message: 'Password is incorrect!' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, 'BDPEK@', { expiresIn: '1h' });

    console.log('this is the tocken', token);

    res.status(200).json({ message: 'OK', token, userId: user.id, role: user.role });
}

module.exports = {login}
