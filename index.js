const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const courses = require('./Data/courses.json');

app.get('/',(req, res) =>{
    res.send('api is Running');
});


app.get('/courses', (req, res) =>{
    res.send(courses)
})




app.listen(port, () => {
    console.log('Given api is running', port);
})