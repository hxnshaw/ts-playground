import express,{Express} from 'express';
import dotenv from 'dotenv';

const bodyParser = require("body-parser");
dotenv.config();
const taskRouter=require('./routers/task')

const app:Express=express();
const port=2222;

//DATABASE
const connectDatabase=require('./db/connect')

app.use(bodyParser.json());
//ROUTERS
app.use('/api/tasks',taskRouter)

const start=async()=>{
    try {
        await connectDatabase(process.env.MONGO_URI);
        app.listen(port,()=>console.log(`[server]:Server is running on ${port}`))
    } catch (error) {
        console.log(error);
        
    }
}

start();