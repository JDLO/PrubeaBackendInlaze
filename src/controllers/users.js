const mongoose = require('mongoose');
const User = require('../models/user');

const findAllUsers = (req, res) => {
    User.find()
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

const findByIdUser = (req, res) => {
    let {id} = req.params;
    User.findById(id)
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

const updateOneUser = (req, res) => {
    let {id} = req.params;
    let { name, email, nick_name} = req.body
    User.updateOne({_id: id}, {$set: {name, email, nick_name}})
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

const deleteByIdUser = (req, res) => {
    let {id} = req.params;
    User.remove({_id: id})
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

const addUser = (req, res) => {
    let user = new User(req.body);
    user.save()
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

module.exports = {
    findAllUsers,
    findByIdUser,
    updateOneUser,
    addUser,
    deleteByIdUser,
    }
