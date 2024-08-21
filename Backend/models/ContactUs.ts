 import mongoose from "mongoose";
 
 const { Schema } = mongoose;
 
 const contactUsSchema = new Schema({
   contactFirstName: { type: String, required: true },
   contactLastName: { type: String, required: true },
   contactEmail: { type: String, required: true },
   contactCompany: { type: String },
   contactHear: { type: String }, 
   contactMessage: { type: String, required: true },
   createdAt: { type: Date, default: Date.now },
 });
 
 const ContactUs = mongoose.model('ContactUs', contactUsSchema);
 
 module.exports = ContactUs;