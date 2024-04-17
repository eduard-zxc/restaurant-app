// import mongoose, { connections } from 'mongoose';
const mongoose = require('mongoose');


class DatabaseConnection { 
    private static instance: DatabaseConnection; 
 
    private constructor() { 
        // Updated to use the mongoose connection string and options 
        mongoose.connect('mongodb+srv://expensor:FwhKDgnVpvZBDWbs@cluster0.1gpqpj3.mongodb.net/restaurant?retryWrites=true&w=majority&appName=Cluster0', { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true, 
            useFindAndModify: false 
        }).then(() => { 
            // console.log(connections)
            console.log('Database connection successfully established.'); 
        }).catch((error: any) => { 
            console.error('Error connecting to the database:', error); 
        }); 
    } 
 
    public static getInstance(): DatabaseConnection { 
        if (!DatabaseConnection.instance) { 
            DatabaseConnection.instance = new DatabaseConnection(); 
        } 
        return DatabaseConnection.instance; 
    } 
 
    // Other database methods 
}

const dbConnection = DatabaseConnection.getInstance();