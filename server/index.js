require('./src/app.js');
 require('dotenv').config();
const express = require('express');

const app = express();

const cors = require('cors');
const allRoutes = require('./src/app.js');
const path = require('path');
app.use(express.json());
app.use(cors());

// course image path to get the image of the course 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Slider image path to get the image of the Slider 
app.use('/Sliders',express.static(path.join(__dirname,'Sliders')));

// Team Member image path to get the image of the Team Member 
app.use('/teams', express.static(path.join(__dirname, 'teams')));

const port = process.env.PORT  || 5000 ;

app.use(allRoutes);

app.listen(port,()=>{

    console.log(`server is running on port ${port}`);

})

