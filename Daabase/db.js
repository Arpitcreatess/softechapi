const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017mongodb+srv://arpit:Password123@cluster0.wtechb0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);
const dbName = 'local';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
     return db;
  }
  

  module.exports=main
