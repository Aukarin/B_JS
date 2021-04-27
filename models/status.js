const { Schema, model } = require('mongoose')

const StaListItemSchema = new Schema({
   
    User: {
        type: String,
        required: true,
    },
    Pass: {
        type: String,
        required: true,
    },
    Names: {
        type: String,
        required: true,
    },
    Addresss: {
        type: String,
        required: true,
    },
    Sta: {
        type: String,
        required: true,
    },
   
   
})

const StaketListItem = model('staketListItems', StaListItemSchema)

module.exports = StaketListItem
