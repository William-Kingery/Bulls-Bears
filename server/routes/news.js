import express from "express";
import { newsData } from "../controller/apidata.js";


const router = express.Router();


router.get("/", async (req, res) => {
   try {
      const data = await newsData();
      res.json(data);
   } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
   }
   })

export default router;


