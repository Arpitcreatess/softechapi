const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://arpit:password123jk@cluster0.wtechb0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);
const dbName = 'sample_mflix';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
     return db;
  }
  

  module.exports=main
