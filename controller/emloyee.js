const { connectDB } = require("../config/db");

const insretEmployeeData = async (req,res)=>{
    const data = req.body
    const result = await connectDB(data)
    res.send(result)
}

module.exports={insretEmployeeData}