//  importing files
import  express  from "express";
import cors from "cors"
import {config}  from "dotenv"
import router from "./routers/route.js";
import connection from "./database/conn.js";

// middlewares
const app = express();


app.use(cors())
app.use(express.json())
app.use('',router)
config()






//starting the server







const port= process.env.PORT || 3000;

//connection() is used to connect the Database
//connection().then() : means after connecting with database what to do 

connection().then(()=>{

    // server port is starting
    try{
        app.listen(port,()=>{
            console.log("starting server")
        })
    }catch(err){
        // if error to start server port is starting
        console.log("Cannot connect with server")
    }
}).catch((err)=>{  console.log("Cannot connect with server")
 // if couldn't connect database 
})

