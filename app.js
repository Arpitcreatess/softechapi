// app.js
const express = require('express');
const app = express();
const PORT = 2300 ;
const indexRouter=require('./Router/index')
app.use(express.json());
// Example route (Home)
app.use('/',indexRouter)
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
