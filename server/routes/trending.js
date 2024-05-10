import express from "express";
import { winnersLosersData } from "../controller/apidata.js";

const router = express.Router();

router.get('/', async (req, res) => {
   try {
    const { topWinners, topLosers } = await winnersLosersData();
    res.json({ topWinners, topLosers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;