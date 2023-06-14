const express = require('express');
const app = express();
const users = require('./data');

const port = 4000;

const userRoutes = require('./routes/user');
app.use(express.json());

app.use('/users', userRoutes);

//handles undefined routes
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: "Not found"
    })
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})