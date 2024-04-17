const mongoose = require('mongoose');

// const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect('mongodb+srv://expensor:FwhKDgnVpvZBDWbs@cluster0.1gpqpj3.mongodb.net/restaurant?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log(con.connections);
    console.log('DB connection successful');
}).catch(err => {
    console.log('DB connection failed');
});
