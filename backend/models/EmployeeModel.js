import {Schema,model} from "mongoose"
const employeeSchema=Schema({
    name:{
        type:String,
        required:[true]
    },
    email:{
        type:String,
        required:[true]
    },
    phoneNumber:{
        type:Number,
        required:[true]
    },
    companyName:{
        type:String,
        required:[true]
    }
})

export const EmployeeModel=model("employee",employeeSchema)