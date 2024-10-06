import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { MONGO_URI } from './models/config';
const ContactUs = require('./models/ContactUs');

const app = express();

// Enable CORS for specific origins or for all origins (uncomment one of the two options)
app.use(cors());  // Allows all origins
// app.use(cors({ origin: 'https://www.orioncor.ca' }));  // Allows only specific origin

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
        res.status(500).json({
            message: 'Failed to create contact',
            error: error.message || error,
        });
    }
});

app.get('/', async (req, res) => {
    res.status(200).json({
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
    console.log('App is listening on port 4000');
});
