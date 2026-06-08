require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors({
  origin: "http://localhost:3000",
}));

app.use(express.json());

app.use(
 "/api/auth",
 require("./routes/authRoutes")
);

app.use(
 "/api/jobs",
 require("./routes/jobRoutes")
);

app.use(
 "/api/applications",
 require(
  "./routes/applicationRoutes"
 )
);

app.listen(5000, () => {
  console.log("Server Running");
});