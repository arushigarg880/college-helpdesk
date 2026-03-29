require('dns').setDefaultResultOrder('ipv4first');
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// connect database
connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const feedbackRoutes = require("./routes/feedbackRoutes");
const adminRoutes = require("./routes/adminRoutes");
const queryRoutes = require("./routes/queryRoutes");
const responseRoutes = require("./routes/responseRoutes");
const chatRoute = require("./routes/chat");

app.use("/api/chat", chatRoute);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/response", responseRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// error handler (ALWAYS LAST)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
});

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});