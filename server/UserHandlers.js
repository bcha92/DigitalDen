"use strict";

const assert = require("assert");
const fs = require("file-system")
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const bcrypt = require('bcrypt')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");
const e = require("express");
const { ObjectID } = require("bson");

const hashPass = async (passToHash) => {
    try {
        const hashedPassword = await bcrypt.hash(passToHash, 10);
        return hashedPassword;
        // return await bcrypt.hash(passToHash, 10);

    } catch (err) {
        console.log(err, "Error hashing password")
    }
};


// POST - create newly registered users data info
const addNewUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    let { password } = req.body;

    if (
        !req.body ||
        !firstName ||
        !lastName ||
        !password ||
        !email ||
        !email.includes('@')) {
        client.close();
        return res.status(400).json({ status: 400, message: "Error - data missing" })

    };

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("e-commerce-Project");

    // check if user already exists by email
    const exisitingUsers = await db.collection("users").findOne({ email })

    // check if user exists. If so, send error, else create new user
    if (exisitingUsers !== null) {
        return res.status(400).json({ status: 400, data: exisitingUsers, message: "That user already exisits" })
    } else {

        const hashedPassword = await hashPass(req.body.password)
        req.body.password = hashedPassword;

        const userData = { _id: uuidv4(), ...req.body };

        const newUser = await db.collection("users").insertOne(userData)
        res.status(201).json({ status: 201, data: newUser, message: "User added to database" })
    }
    client.close();
};

const getUserById = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("e-commerce-Project");

    const { _id } = req.params;
    const user = await db.collection("users").find({ _id }).toArray()
    client.close();



}

module.exports = { addNewUser, getUserById };