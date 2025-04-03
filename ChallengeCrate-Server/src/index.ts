import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";

import passport from "./utils/passport";
import authRoutes from "./routes/authRoutes";

import initialDBCheck from "./db/database"; './db/database';

dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET || "default",
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    initialDBCheck();
    console.log(`Server is running on port http://localhost:${PORT};`)
});