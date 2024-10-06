import express from 'express';
var cors = require('cors')
var app = express()
//app.use(cors())
const ContactUs = require('./models/ContactUs');
import mongoose from 'mongoose';
import { MONGO_URI } from './models/config';
app.use(express.json());





app.post('/submitForm', async (req, res) => {
    try {
        const contact = await ContactUs.create({
            contactFirstName: req.body.firstName,
            contactLastName: req.body.lastName,
            contactEmail: req.body.email,
            contactCompany: req.body.companyName,
            contactHear: req.body.hearAboutUs,
            contactMessage: req.body.message,
        });

        res.status(201).json({
            message: 'Contact created successfully',
            contact,
        });
    } catch (error) {
        res.status(201).json({
            message: error
        });
    }
});


app.get('/', async (req, res) => {
   
        res.status(201).json({
            message: 'Welcome',
        });
   
});

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });



app.listen(4000, () => {
    console.log('App is listnening to the port 4000')
});


