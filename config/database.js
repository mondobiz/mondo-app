const mongoose = require('mongoose');

const connectionURI = 'mongodb+srv://admin:Mango383@cluster0.m0exe.mongodb.net/mondoData?retryWrites=true&w=majority'

const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
});

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});