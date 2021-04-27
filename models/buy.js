const { Schema, model } = require('mongoose')

const BuyListItemSchema = new Schema({
   
    Name: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    Num: {
        type: String,
        required: true,
    },
    
    Price: {
        type: String,
        required: true,
    },
    
    
   
})

const BuyketListItem = model('buyketListItems', BuyListItemSchema)

module.exports = BuyketListItem
