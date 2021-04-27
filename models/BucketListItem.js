const { Schema, model } = require('mongoose')

const BucketListItemSchema = new Schema({
   
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

const BucketListItem = model('bucketListItem', BucketListItemSchema)

module.exports = BucketListItem
