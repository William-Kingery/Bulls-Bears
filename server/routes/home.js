import express from "express";
import authorize from '../middleware/authorize.js';
import knex from 'knex';
import knexConfig from '../knexfile.js';
import { snatchData, indicesData, earningsData, winnersLosersData, ipoData } from "../controller/apidata.js";


const router = express.Router();
const myknex = knex(knexConfig);

router.get("/", authorize, async (_req, res) => {
   try {
       const user = await myknex.select("*").from("user");
       res.json(user);
   } catch (err) {
       res.status(500).json({ message: "Unable to retrieve users data" });
   }
});

router.get("/stocks", async (req, res) => {
   try {
      const data = await snatchData();
      res.json(data);
   } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
   }

});

router.get("/indices", async (req, res) => {
   try {
      const data = await indicesData();
      res.json(data);
   } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
   }

});

router.get("/earnings", async (req, res) => {
   try {
      const data = await earningsData();
      res.json(data);
   } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
   }

});

router.get("/ipo", async (req, res) => {
   try {
      const data = await ipoData();
      res.json(data);
   } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
   }

});

router.get('/topfive', async (req, res) => {
   try {
    const { topWinners, topLosers } = await winnersLosersData();
    res.json({ topWinners, topLosers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



export default router;



// router.get('/', authorize, async (req, res) => {
//    try {
//       const userHome = await myknex('home')
//          .join('user', 'user.id')
//          .select('home');
//          res.status(200).json(userHome)
//    } catch (error) {
//       console.error('Error fetching inventories:', error);
//       res.status(500).json({ error: 'Internal server error' });
//    }
// });
