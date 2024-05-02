import express from "express";
import cors from "cors";
import "dotenv/config"
import user from "./routes/user.js"


const app = express();
const { PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN })); 
app.use(express.json());


app.route("/")
  .get((req, res) => {res.status(200).json("Houston, we are go for lift off")});

app.use("/user", user)


app.listen(PORT || 5050, () => {
    console.log(`running on ${PORT || 5050}`);
});

