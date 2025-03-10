const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3002;

// MongoDB connection details
// const uri = "mongodb+srv://test1:kanishka123@cluster0.2lxux.mongodb.net/";
const uri = "mongodb+srv://test1:kanishka123@cluster0.2lxux.mongodb.net/";
const dbName = "Finoptix"; // Ensure your MongoDB database is named appropriately

// Middleware
app.use(express.json());

let db, users;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        users = db.collection("users"); // Initialize users collection

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// Routes

// GET: List all users
app.get('/users', async (req, res) => {
    try {
        const allUsers = await users.find().toArray();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).send("Error fetching users: " + err.message);
    }
});

// GET: Get user details by userId
app.get('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await users.findOne({ userId });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).send("Error fetching user details: " + err.message);
    }
});


// app.get('/users/:userId', async (req, res) => {
//     try {
//         const userId = req.params.userId;

//         // Query the database for the user with only 'profileViews' field
//         const user = await users.findOne(
//             { userId }, // Match userId
//             { projection: { profileViews: 1, _id: 0 } } // Include profileViews, exclude _id
//         );

//         if (!user) {
//             return res.status(404).send("User not found");
//         }

//         // Send the 'profileViews' as the response
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).send("Error fetching user details: " + err.message);
//     }
// });

// POST: Add a new user
app.post('/users', async (req, res) => {
    try {
        const newUser = req.body;
        const result = await users.insertOne(newUser);
        res.status(201).send(`User added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding user: " + err.message);
    }
});

// PUT: Update a user completely
app.put('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await users.updateOne({ _id: userId }, { $set: req.body });

        res.status(result.modifiedCount ? 200 : 404).send(result.modifiedCount ? "User updated" : "No changes made");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});


app.put('/users/:userId/skills', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { skills } = req.body;

        // Ensure skills array is provided in the request body
        if (!skills || !Array.isArray(skills)) {
            return res.status(400).send("Invalid input: 'skills' must be an array.");
        }

        // Update the 'skills' field for the specified user
        const result = await users.updateOne(
            { userId }, // Match user by userId
            { $set: { skills } } // Update the 'skills' field
        );

        if (result.matchedCount === 0) {
            return res.status(404).send("User not found");
        }

        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error updating user skills: " + err.message);
    }
});


// PATCH: Partially update a user
app.patch('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const updates = req.body;
        const result = await users.updateOne(
            { userId: userId },
            { $set: { headline: "Team Lead at CodingGita" } }
        );
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating user: " + err.message);
    }
});

app.patch('/users/:userId/premium', async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log("Received userId:", userId); // Debug log
        
        const result = await users.updateOne(
            { userId: userId },
            { $set: { isPremium: true } }
        );

        if (result.matchedCount === 0) {
            console.log("No matching user found for userId:", userId); // Debug log
            return res.status(404).send("User not found");
        }

        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error upgrading user to premium: " + err.message);
    }
});



// DELETE: Remove a user
app.delete('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await users.deleteOne({ userId: userId });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting user: " + err.message);
    }
});
