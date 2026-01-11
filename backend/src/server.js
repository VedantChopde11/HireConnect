import express from "express"
import path from "path"
import cors from "cors"
import  {ENV} from "./lib/env.js"
import { clerkMiddleware } from '@clerk/express'


import { connectDB } from "./lib/db.js"
import { inngest } from "./lib/inngest.js"
import { serve } from "inngest/express";
import { functions } from "./lib/inngest.js"
import { protectRoute } from "./middleware/protectRoute.js"
import chatRoutes from "./routes/chatRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"


const app = express()


const __dirname = path.resolve()

// ===== MIDDLEWARES =====
app.use(express.json())
// credentials:true meaning?? => server allows a browser to include cookies on request

const allowedOrigins = [
  "http://localhost:5173",
  "https://hireconnect-client.onrender.com"
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(clerkMiddleware())  //this adds auth field to request object: req.auth()

// ===== ROUTES =====

app.use("/api/inngest" , serve({client: inngest , functions}))

app.get('/' , (req , res) => {
    req.auth
    res.status(200).json({message:"welcome to backend"})
})

// when  you pass an array of middleware to Express, it automatically flattens ans executes them sequentially , one by one.
app.get("/video-calls", protectRoute , (req,res) => {
    res.status(200).json({msg:"this is a protected route"})
})

app.use("/api/chat" , chatRoutes)
app.use("/api/sessions" , sessionRoutes)



// make our app ready for deployment 
if(ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("/*" , (req,res) => {
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

