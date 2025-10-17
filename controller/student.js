const database1=require('../Daabase/db')

const getstudentdata=async(req, res) => {
    const db1=await database1();
    const collection =db1.collection("student")
    const findResult1 = await collection.find({}).toArray();



    res.send(findResult1); // send data as JSON
  }


  const insertstudentdata=async(req, res) => {
    const db1=await database1();
    const collection =db1.collection("student")
    const insertResult1 = await collection.insertOne(req.body);



    res.send(insertResult1); // send data as JSON
  }


  const deletestudentdata=async(req, res) => {
    const db1=await database1();
    const collection =db1.collection ("student")
    const deleteResult1 = await collection.deleteOne({id:parseInt(req.query.id)});



    res.send(deleteResult1); // send data as JSON
  }


  module.exports={getstudentdata,insertstudentdata,deletestudentdata}