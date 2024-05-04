import express from "express";
import knex from 'knex';
import knexfile from '../knexfile.js';

const router = express.Router();
const myknex = knex(knexfile);

router.get("/", (req, res) => {
    res.status(200).json("Here's the trending");
  })

export default router;