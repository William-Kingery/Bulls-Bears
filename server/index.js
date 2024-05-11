import express from "express";
import cors from "cors";
import "dotenv/config";
import user from "./routes/user.js";
import home from "./routes/home.js";
import profile from "./routes/profile.js";
import news from "./routes/news.js";
import trending from "./routes/trending.js";


const app = express();
const { PORT, CORS_ORIGIN } = process.env;

app.use(cors()); 
app.use(express.json());


app.route("/")
  app.use("/user", user);
  app.use('/home', home);
  app.use('/profile', profile);
  app.use('/news', news);
  app.use('/trending', trending);


app.listen(PORT || 5050, () => {
    console.log(`running on ${PORT || 5050}`);
});

