import express from "express";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import { databaseconnection } from "./config/database.js";
import dotenv from "dotenv";
dotenv.config();
import user from "./routers/user.js";
import cors from "cors";
import fileUpload from "express-fileupload";

databaseconnection();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);


app.use("/user", user);

// cron.schedule('*/3 * * * *', async () => {
//   try {
//     const threeMinutesAgo = new Date();
//     threeMinutesAgo.setMinutes(threeMinutesAgo.getMinutes() - 59);
//     // Assuming 'Story' is your Mongoose model
//     await Story.deleteMany({ createdAt: { $lt: threeMinutesAgo } });
//     console.log('Expired stories removed.');
//   } catch (err) {
//     console.error('Error removing expired stories:', err.message);
//   }
// }, {
//   timezone: 'Asia/Kolkata',
// });

const port = process.env.PORT || 5555;
const server = app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: ["https://friends-flock.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});
