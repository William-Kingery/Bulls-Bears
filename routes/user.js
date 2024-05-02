
import express from "express";
import uniqid from "uniqid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import knex from "knex";
import knexfile from "../knexfile.js";
import authorize from "../middleware/authorize.js";


const router = express.Router();
const myknex = knex(knexfile);


router.post("/register", async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).send("Please enter the required fields");
    }
    const hashedPassword = bcrypt.hashSync(password);
    const newUser = {
        first_name,
        last_name,
        email,
        password: hashedPassword
    };

    try {
        await myknex("users").insert(newUser);
        res.status(201).send("Registered successfully");
    } catch (err) {
        console.log(err);
        res.status(400).send("Failed registration");
    }
});

router.post("/login", async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("PLease enter ther required fields");
    }

    const user = await myknex("users").where({ email: email }).first();
    if (!user) {
        return res.status(400).send("Invalid email");
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(400).send("Invalid password");
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_KEY,
        { expiresIn: "24h" }
    );

    res.json({ token: token });
    res.status(200);
});

router.get("/current", async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }
    console.log(req.headers.authorization);

    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        console.log(decoded);
        const user = await myknex("users").where({ id: decoded.id }).first();
        delete user.password;
        res.json(user);

    } catch (error) {
        console.log(error);
        return res.status(401).send("Invalid auth token: ", error);
    }
});

router.get("/", authorize, async (_req, res) => {
    try {
        const users = await myknex.select("*").from("users")
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Unable to retrieve users data" });
    }
});




export default router;