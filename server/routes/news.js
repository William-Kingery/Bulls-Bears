import express from "express";
import authorize from '../middleware/authorize.js';
import knex from 'knex';
import knexConfig from '../knexfile.js';
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



