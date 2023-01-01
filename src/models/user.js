const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    name: { type: String},
    email:{ type: String},
    password: {type: String},
    nick_name: {type: String}
}, {
    methods:{
        checkPassword(password){
            return bcrypt.compareSync(password, this.password);
        }
    }
});

module.exports = User = mongoose.model('User', UserSchema);
