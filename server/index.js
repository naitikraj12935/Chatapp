import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Connection from "./Db.js";
import UserRouter from "./Route/User.Route.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Using bodyParser.json() middleware to parse JSON bodies
app.use(bodyParser.json());

const options = {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
};

// Using CORS middleware with specified options
app.use(cors(options));

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use('/',UserRouter);
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});

Connection();
