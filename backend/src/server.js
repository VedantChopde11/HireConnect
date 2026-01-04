import express from "express"
import path from "path"
import cors from "cors"
import  {ENV} from "./lib/env.js"

import { connectDB } from "./lib/db.js"
import { inngest } from "./lib/inngest.js"
import { serve } from "inngest/express";
import { functions } from "./lib/inngest.js"


const app = express()


const __dirname = path.resolve()

// ===== MIDDLEWARES =====
app.use(express.json())
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({
    origin:ENV.CLIENT_URL, 
    credential:true
}))

// ===== ROUTES =====

app.get('/' , (req , res) => {
    res.status(200).json({message:"welcome to backend"})
})



app.use("/api/inngest" , serve({client: inngest , functions}))

// make our app ready for deployment 
if(ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("/{*any}" , (req,res) => {
        res.sendFile(path.join(__dirname , "../frontend" , "dist" , "index.html"))
    })
}


// ===== START SERVER =====

const startServer = async () => {
    try {
       await connectDB()
       app.listen(ENV.PORT , () => {
        console.log("connected to the backend at port:",ENV.PORT)
       })

    } catch (error) {
        console.error("Database connection failed" , error)
    }
}

startServer()

