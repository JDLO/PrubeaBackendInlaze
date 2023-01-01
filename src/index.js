const express = require('express')

const app = express();

require('./database')

const port = 3000;

app.use(require('./routes/index.routes'))

app.listen(port);

console.log('Server on port', port);
