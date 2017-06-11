const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  cors = require('cors')
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),

  usersRoutes = require('./routes/users.js'),
  mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/jwtpractice',
  port = process.env.PORT || 3001


// connect to mongodb:
mongoose.connect(mongoUrl, (err) => {
  console.log(err || 'Connected to MongoDB.')
})
// Cross Origin Request availables
app.use(cors())

// log all incoming requests to the console:
app.use(logger('dev'))


// interpret bodies of data that are included in requests:
app.use(bodyParser.json()) // interpret json bodies
app.use(bodyParser.urlencoded({extended: false})) // interpret form data

// server root route:
app.get('/', (req, res) => {
  res.json({message: "Server root. All API routes start with /api..."})
})

// apply all user routes here:
app.use('/api/users', usersRoutes)

// listen for incoming http requests:
app.listen(port, (err) => {
  console.log(err || `Server running on ${port}`)
})
