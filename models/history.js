const { Schema, model } = require('mongoose')

const SellListItemSchema = new Schema({
    NameUser: {
        type: String,
        required: true,
    },
    AddressUser: {
        type: String,
        required: true,
    },
    ItemUser: {
        type: String,
        required: true,
    },
    TypeUser: {
        type: String,
        required: true,
    },
    NumUser: {
        type: String,
        required: true,
    },
    
    
    
   
})

const History = model('sellketListItems', SellListItemSchema)

module.exports = History
