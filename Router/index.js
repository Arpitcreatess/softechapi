const express = require('express');
const router = express.Router();
const st=require('../controller/course')
const st1=require('../controller/student')
const st2=require('../controller/teacher')

 
router.get('/', (req, res) => {
    res.send('Welcome to my Express server!');
  });
  
  // Route to get data
   router.get('/getcoursedata', st.getcoursedata);
  router.post('/insertcourse',st.insertcoursedata);
  router.delete('/deletecourse',st.deletecoursedata);
  
  router.get('/getstudentdata', st1.getstudentdata);
  router.post('/insertstudent',st1.insertstudentdata);
  router.delete('/deletestudent',st1.deletestudentdata);
   
  router.get('/getteacherdata', st2.getteacherdata);
  router.post('/insertteacher',st2.insertteacherdata);
  router.delete('/deleteteacher',st2.deleteteacherdata);


  module.exports=router;
