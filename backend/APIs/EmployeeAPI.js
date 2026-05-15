import exp from 'express'
import { EmployeeModel } from '../models/EmployeeModel.js'
import {config} from 'dotenv'
config()

export const employeeApp = exp.Router();

//create new emp
employeeApp.post("/add",async(req,res)=>{
    //get new emp object from req
    const newEmployee=req.body;
    //create new user document
    const newEmployeeDocument=new EmployeeModel(newEmployee)
    //save
   const result= await newEmployeeDocument.save()
   console.log('result',result)
   //send res
    res.status(201).json({message:"employee is created"})

});


//read all emp
employeeApp.get("/employees",async(req,res) => {
        let employeesList=await EmployeeModel.find();
        //send res
        res.status(200).json({message:" all employess",payload:employeesList})
    })


//edit emp
employeeApp.put("/employee/:id",async(req,res)=>{
    //get modified user from req body
    const modifiedEmployee=req.body;
    const uid=req.params.id;
    //find user by id and update
    const updatedEmployee= await EmployeeModel.findByIdAndUpdate(uid,{$set:{...modifiedEmployee}},{new:true,runValidators:true})
     res.status(200).json({message:"employee details updated",payload:updatedEmployee})
})



//delete emp
employeeApp.delete("/employee/:id",async(req,res)=>{
    let uid=req.params.id;
    //find and delete by id
    let deletedemployee=await EmployeeModel.findByIdAndDelete(uid)
    if (!deletedemployee) {
    return res.status(404).json({ message: "employee not found" });
  }
    //send res
    res.status(200).json({message:"employee Deleted"})
})



