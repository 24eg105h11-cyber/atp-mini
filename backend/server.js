import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import core from 'cors'
import {employeeApp} from './APIs/EmployeeAPI.js'

config()
const app=exp()

//CORS middleware
app.use(core({
    origin: function (origin, callback) {
        const allowedOrigins = [
            process.env.FRONTEND_URL,
            'https://atp-mini-frontend-git-main-24eg105h11-cybers-projects.vercel.app',
            'https://atp-mini-frontend.vercel.app'
        ];
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

//body parser middleware
app.use(exp.json())

//Route middleware
app.use("/employee",employeeApp)

const connectDB=async ()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("DB Server connected")

        //Assign port
        const port=process.env.PORT || 5000
        app.listen(port,()=>console.log(`Server listening on ${port}...`))
    }catch(err){
        console.log("Error in DB connection", err)
    }
}

connectDB()

//To handle invalid path
app.use((req,res,next)=>{
    res.status(404).json({message:`Path ${req.url} is invalid`})
})

//To handle errors
app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.code)
    if(err.name==="Validation Error"){
        return res.status(400).json({message:"Error in validation: ",err:err.message})
    }
    if(err.name==="Syntax Error"){
        return res.status(400).json({message:"Error in Syntax",err:err.message})
    }
    res.status(500).send({message:err.message})
})

