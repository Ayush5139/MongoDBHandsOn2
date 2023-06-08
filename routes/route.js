const { showDB, deleteEntry, updateEntry, salariedData, requiredEntry } = require("../config/db")
const { insretEmployeeData } = require("../controller/emloyee")

const route = require("express").Router()

route.post("/employee",insretEmployeeData)
route.get("/employeedata",showDB)
route.delete("/employeedel/:id",deleteEntry)
route.get("/employeeupd/:ini/:upd",updateEntry)
route.get("/employeesal/:salary",salariedData)
route.get("/employeerequired/:year/:exp",requiredEntry)

module.exports={route}