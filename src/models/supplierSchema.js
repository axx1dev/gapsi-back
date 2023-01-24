const mongoose = require('mongoose')

const supplierSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    twistkey: {
        type: String,
        required: true
    },
    suppliers: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    
    
    

})

//arguments 1 name model, 2 schema, 3 name collection
module.exports = mongoose.model('SupplierSchema', supplierSchema, 'suppliers')