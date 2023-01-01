const mongoose = require('mongoose');
const User = require('../models/user');

const findAllUsers = (req, res) => {
    User.find((err, users)=> {
        err && res.status(500).send(err.message);

        res.status(200).json(users);
    });
}

const findById = (req, res) => {
    User.findById(req.params.id, (err, users)=> {
        err && res.status(500).send(err.message);

        res.status(200).json(users);
    });
}

const addUser = (req, res) => {
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    user.save((err, usr)=> {
        err && res.status(500).send(err.message);

        res.status(200).json(usr);
    });
}

module.exports = {findAllUsers, findById, addUser}
