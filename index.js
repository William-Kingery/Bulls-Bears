import express from "express";
import cors from "cors";
import "dotenv/config"
const app = express();

const { PORT, BACKEND_URL, CORS_ORIGIN } = process.env;
app.use(cors({ origin: CORS_ORIGIN })); 
app.use(express.json());



app.listen(PORT || 5050, () => {
    console.log(`running on ${PORT || 5050}`);
})

