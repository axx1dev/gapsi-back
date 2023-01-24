const mongoose = require('mongoose')

const welcomeSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },    
})

//arguments 1 name model, 2 schema, 3 name collection
module.exports = mongoose.model('WelcomeSchema', welcomeSchema, 'welcome')