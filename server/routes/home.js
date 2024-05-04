import express from "express";
import knex from 'knex';
import knexfile from '../knexfile.js';

const router = express.Router();
const myknex = knex(knexfile);



router.get("/", (req, res) => {
   res.status(200).json("Here's the home page");
 })




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