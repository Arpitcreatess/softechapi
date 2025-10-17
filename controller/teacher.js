const database2=require('../Daabase/db')

const getteacherdata=async(req, res) => {
    const db2=await database2();
    const collection =db2.collection ("teacher")
    const findResult2 = await collection .find({}).toArray();



    res.send(findResult2); // send data as JSON
  }


  const insertteacherdata=async(req, res) => {
    const db2=await database2();
    const collection =db2.collection ("teacher")
    const insertResult2 = await collection.insertOne(req.body);



    res.send(insertResult2); // send data as JSON
  }


  const deleteteacherdata=async(req, res) => {
    const db2=await database2();
    const collection =db2.collection ("teacher")
    const deleteResult2 = await collection .deleteOne({id:parseInt(req.query.id)});



    res.send(deleteResult2); // send data as JSON
  }


  module.exports={getteacherdata,insertteacherdata,deleteteacherdata}