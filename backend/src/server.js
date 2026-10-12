import express from "express"
import path from "path"
import cors from "cors"
import { ENV } from "./lib/env.js"
import fs from "fs"
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

app.use(clerkMiddleware())  //this adds auth field to request object: req.auth()

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  ENV.CLIENT_URL ? ENV.CLIENT_URL.replace(/\/+$/, "") : null
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const cleanOrigin = origin.replace(/\/+$/, "");
    const isLocalhost = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(cleanOrigin);
    const isAllowed = allowedOrigins.includes(cleanOrigin);

    if (isLocalhost || isAllowed) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  credentials: true
}));


// ===== ROUTES =====

app.use("/api/inngest", serve({ client: inngest, functions }))

app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "HireConnect backend is running" });
});

app.get("/api/users/me", protectRoute, (req, res) => {
    res.status(200).json({ user: req.user });
});


// when  you pass an array of middleware to Express, it automatically flattens ans executes them sequentially , one by one.
app.get("/video-calls", protectRoute, (req, res) => {
    res.status(200).json({ msg: "this is a protected route" });
});

app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

// make our app ready for deployment 
if (ENV.NODE_ENV === "production") {
    const frontendDist = path.join(__dirname, "../frontend/dist");
    const indexHtml = path.join(frontendDist, "index.html");

    if (fs.existsSync(indexHtml)) {
        app.use(express.static(frontendDist));

        app.get("{*path}", (req, res) => {
            res.sendFile(indexHtml);
        });
    } else {
        app.get('/', (req, res) => {
            res.status(200).json({ message: "welcome to backend" });
        });
    }
} else {
    app.get('/', (req, res) => {
        res.status(200).json({ message: "welcome to backend" });
    });
}

const startServer = async () => {
    try {
        await connectDB()
        app.listen(ENV.PORT, () => {
            console.log("connected to the backend at port:", ENV.PORT)
        })
    } catch (error) {
        console.error("Database connection failed", error)
    }
}

startServer()

