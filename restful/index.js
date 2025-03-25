const express = require('express');
const { v4: uuidv4 } = require('uuid'); // Import UUID
const app = express();
const port = 3000;

const MyFriends = [ 
    { id: uuidv4(), name: 'Omair', email: 'omair@gmail.com' },
    { id: uuidv4(), name: 'Ameer', email: 'ameer@gmail.com' },
    { id: uuidv4(), name: 'Zaid', email: 'zaid@gmail.com' }
];

app.use(express.json()); // Middleware to parse JSON data

// Root Route
app.get('/', (req, res) => {
    res.send('I am a RESTful API');
});

// Get all friends
app.get('/api/friends', (req, res) => {
    res.send(MyFriends);
});

// Get friend by ID
app.get('/api/friends/:id', (req, res) => {
    const friend = MyFriends.find(c => c.id === req.params.id);
    if (!friend) return res.status(404).send('The friend with the given ID was not found');
    res.send(friend);
});

// Add a new friend
app.post('/api/friends', (req, res) => {
    const newFriend = {
        id: uuidv4(),  // Generate a new UUID for each friend
        name: req.body.name,
        email: req.body.email
    };
    MyFriends.push(newFriend);
    res.status(201).send(newFriend);
});

// Update a friend's details (PATCH)
app.patch('/api/friends/:id', (req, res) => {
    // Find the index of the friend
    const index = MyFriends.findIndex(c => c.id === req.params.id);
    if (index === -1) return res.status(404).send('The friend with the given ID was not found');

    // Create a new friend object by merging existing and new data
    const friend = { 
        ...MyFriends[index],  // Existing friend data
        ...req.body           // Overwrite with new data from request
    };

    // Create a new array and append the updated friend
    const friends = [...MyFriends];
    friends[index] = friend;  // Update the modified friend in the array

    res.send(friends);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
