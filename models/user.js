const { Schema, model } = require('mongoose')

const UserListItemSchema = new Schema({
   

    User: {
        type: String,
        required: true,
    },
    Pass: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Tel: {
        type: String,
        required: true,
    },
    
    Email: {
        type: String,
        required: true,
    },
    Sta: {
        type: String,
        required: true,
    },
    
    
   
})

const UserketListItem = model('useketListItems', UserListItemSchema)

module.exports = UserketListItem
