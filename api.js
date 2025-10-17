// app.js
const sm = require('./index');
const fs = require('fs').promises;

// Use the sum function
let c = sm.sum(20, 40);
console.log("Sum is:", c);

// Append data to a file
async function appendAndRead() {
  try {
    // Append text to file (creates file if it doesn’t exist)
    await fs.appendFile('myfile.txt', 'This line was appended!\n');
    console.log('Data appended successfully.');

    // Read the file again
    const data = await fs.readFile('myfile.txt', 'utf8');
    console.log('Updated file content:\n', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

appendAndRead();
