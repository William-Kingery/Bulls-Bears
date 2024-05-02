
import express from "express";
import uniqid from "uniqid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import knex from "knex";
import knexfile from "../knexfile.js";


const router = express.Router();
const myknex = knex(knexfile);

            //authorize//
router.get("/", authorize, async (_req, res) => {
    try {
        const user = await myknex.select("*").from("user")
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Unable to retrieve users data" });
    }
});




export default router;