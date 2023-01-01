const express = require('express');
const Users = require('./api/users');
const Message = require('./api/messages');
const Auth = require('./api/auth');

const app = express();

require('./database');

const port = 3000;

app.use(express.json());
app.use(require('./routes/index.routes'));
app.use("/api/users", Users);
app.use("/api/messages", Message);
app.use("/api/auth", Auth);

app.listen(port);

console.log('Server on port', port);
