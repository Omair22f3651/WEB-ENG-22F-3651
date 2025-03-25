const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Friend Schema (Updated with age)
const friendSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },  // Added age
});

const Friend = mongoose.model("Friend", friendSchema);

// Routes

// Add a new friend
app.post('/api/friends', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(400).json({ message: "Name, email, and age are required!" });
        }
        const newFriend = new Friend({ name, email, age }); 
        await newFriend.save();
        res.status(201).json(newFriend);
    } catch (err) {
        res.status(500).json({ message: "Error adding friend", error: err });
    }
});

// Get all friends
app.get("/api/friends", async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (error) {
    res.status(500).json({ message: "Error fetching friends", error });
  }
});

// Get a friend by ID
app.get("/api/friends/:id", async (req, res) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) return res.status(404).json({ message: "Friend not found" });
    res.json(friend);
  } catch (error) {
    res.status(500).json({ message: "Error fetching friend", error });
  }
});

// Update a friend's details
app.patch("/api/friends/:id", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const updatedFriend = await Friend.findByIdAndUpdate(
      req.params.id, 
      { name, email, age }, 
      { new: true }
    );
    if (!updatedFriend) return res.status(404).json({ message: "Friend not found" });
    res.json(updatedFriend);
  } catch (error) {
    res.status(500).json({ message: "Error updating friend", error });
  }
});

// Delete a friend
app.delete("/api/friends/:id", async (req, res) => {
  try {
    const deletedFriend = await Friend.findByIdAndDelete(req.params.id);
    if (!deletedFriend) return res.status(404).json({ message: "Friend not found" });
    res.json({ message: "Friend deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting friend", error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
