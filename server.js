
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bucketListItemRoutes = require('./routes/api/bucketListItems')
const userListItemRoutes = require('./routes/api/users')
const buyListItemRoutes = require('./routes/api/buys')
const staListItemRoutes = require('./routes/api/statuss')
const sellListItemRoutes = require('./routes/api/historys')

const methodOverride = require('method-override');



const path = require('path')



app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(methodOverride('_method'));





mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/bucketListItems', bucketListItemRoutes)
app.use('/api/users', userListItemRoutes)
app.use('/api/buys', buyListItemRoutes)
app.use('/api/statuss', staListItemRoutes)
app.use('/api/historys', sellListItemRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
         
    })
}



app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))