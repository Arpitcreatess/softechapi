const database=require('../Daabase/db')

const getcoursedata=async(req, res) => {
    const db=await database();
    const collection=db.collection("course")
    const findResult = await collection.find({}).toArray();



    res.send(findResult); // send data as JSON
  }


  const insertcoursedata=async(req, res) => {
    const db=await database();
    const collection=db.collection("course")
    const insertResult = await collection.insertOne(req.body);



    res.send(insertResult); // send data as JSON
  }


  const deletecoursedata=async(req, res) => {
    const db=await database();
    const collection=db.collection("course")
    console.log(req.query.id)
    const insertResult = await collection.deleteOne({id:parseInt(req.query.id)});



    res.send(insertResult); // send data as JSON
  }


  module.exports={getcoursedata,insertcoursedata,deletecoursedata}