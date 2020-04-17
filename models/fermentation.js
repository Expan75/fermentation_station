const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for todo
const FermentationSchema = new Schema({

    // key identifiers (note MongoDB adds PK of _id automatically)
    name: {
        type: String, // Should have a generation function to make uniqueness more 
        unique: true,
    },
    status: {
        type: String,
        default: "active",
    },

    // Most importantly (sends an email/text when fermentation is done!)
    due: Date,
    notify_when_due: Boolean,

    // Customizable Settings
    burp_per_day: {
        type: Number,
        default: null,
    },
    burp_reminder: {
        type: Boolean,
        default: false, // should be set to true upon selecting n burps per day 
    },

    // Tracking
    last_burped: {
        type: Date,
        default: null,
    },

    // // meta data gets automatically created by moongoose like below...
    // meta: {
    //     created_at: {
    //         type: Date,
    //         default: Date.now
    //     },
    //     updated_at: {
    //         type: Date,
    //         default: Date.now
    //     }
    // }
});


//create model for Project
const Fermentation = mongoose.model('fermentation', FermentationSchema);

module.exports = Fermentation;