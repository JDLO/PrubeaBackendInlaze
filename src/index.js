const express = require('express');
const Users = require('./api/users');

const app = express();

require('./database');

const port = 3000;

app.use(require('./routes/index.routes'));
app.use("/api/users", Users);

app.listen(port);

console.log('Server on port', port);
