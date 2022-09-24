const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },    
    name: { type: String, required: true, index: true },    // name of trip
    length: { type: String, required: true },               // length of stay
    start: { type: Date, required: true },                  // trip date
    resort: { type: String, require: true },                // trip location
    perPerson: { type: String, required: true },            // cost per person
    image: { type: String, required: true },                // cover image for trip
    description: { type: String, required: true }           // description of trip
});