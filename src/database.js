const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydatabase',
    { useNewUrlParser: true},
)
.then(db => console.log('Db is connected to', db.connection.host))
.catch(err => console.error(err))
