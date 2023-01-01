const mongoose = require('mongoose');
const Message = require('../models/message');

const findAllMessages = (req, res) => {
    Message.find()
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

const findByIdMessage = (req, res) => {
    let {id} = req.params;
    Message.findById(id)
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

const updateOneMessage = (req, res) => {
    let {id} = req.params;
    let { name, email, nick_name} = req.body
    Message.updateOne({_id: id}, {$set: {name, email, nick_name}})
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

const deleteByIdMessage = (req, res) => {
    let {id} = req.params;
    Message.remove({_id: id})
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

const addMessage = (req, res) => {
    let message = new Message(req.body);
    message.save()
    .then((usr)=>{
        res.status(200).json(usr);
    })
    .catch((err)=> {
        res.status(500).send(err.message);
    });
}

module.exports = {
    findAllMessages,
    findByIdMessage,
    updateOneMessage,
    addMessage,
    deleteByIdMessage
    }
