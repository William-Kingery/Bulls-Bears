import express from "express";
import { snatchData, indicesData } from "../controller/apidata.js";
import knex from 'knex';
import knexfile from '../knexfile.js';

const router = express.Router();


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


// router.get('/', async (req, res) => {
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



export default router;