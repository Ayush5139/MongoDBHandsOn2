const {MongoClient} = require("mongodb")
const uri = "mongodb://127.0.0.1:27017"

const newClient  = new MongoClient(uri)

async function connectDB(data){
    console.log("Start")
    const databse = newClient.db("Human")
    const collection = databse.collection("test")
    await newClient.connect()
    const response = await collection.insertOne(data)
    return response
}

async function showDB(req,res){
    console.log("Start")
    const databse = newClient.db("Human")
    const collection = databse.collection("test")
    await newClient.connect()
    const response = await collection.find().toArray()
    console.log(response)
    res.send(response)
}

async function deleteEntry(req,res){
    const id = req.params.id
    console.log(id)
    await newClient.connect()
    const database = newClient.db("Human")
    const collection = database.collection("test")
    const response = await collection.deleteMany({"id":String(id)})
    const response1 = await collection.find().toArray()
    res.send(response1)
}

async function updateEntry(req,res){
    const original = req.params.ini
    const updated = req.params.upd    
    await newClient.connect()
    const database = newClient.db("Human")
    const collection = database.collection("test")
    const response = await collection.updateMany({"id":original},{$set:{"id":updated}})
    const response1 = await collection.find().toArray()
    console.log(response1)
    res.send(response)
}

async function salariedData(req,res){
    const salary = req.params.salary
    console.log(salary)
    await newClient.connect()
    const database = newClient.db("Human")
    const collection = database.collection("test")
    const response = await collection.find({"salary":{$gt:salary}}).toArray()
    res.send(response)
}

async function requiredEntry(req,res){
    const yearGrad = req.params.year
    const overallExp = req.params.exp
    await newClient.connect()
    const database = newClient.db("Human")
    const collection = database.collection("test")
    const response = await collection.find({yearGrad:yearGrad,overallExp:{$gte:overallExp}}).toArray()
    res.send(response)
}

module.exports={connectDB,showDB,deleteEntry,updateEntry,salariedData,requiredEntry}