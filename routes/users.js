const
  express = require('express'),
  usersRouter = new express.Router(),
  usersCtrl = require('../controllers/users.js'),
  User = require('../models/User.js'),
  // users = require('../controllers/users.js')
  serverAuth = require('../config/serverAuth.js')

// POST REQUEST TO CREATE THE TOKEN
usersRouter.post('/login', (req,res) => {
  // lookup user by email
  // if there is no user, respond accordingly
  // if there is a user, but password is wrong, respond accordingly
  // if there is a user and password is correct, generate token and include the user in payload.
  // then send the token as a response.
  User.findOne({ 'email':req.body.email }, '+password' ,(err, user) => {
    console.log(user);
    if (err) return res.status(500).json({success:false, message:"There was a server error"})
    if (!user) return res.status(404).json({success:false, message:"Not user was found with email: "+req.email})
    if (user && !user.validPassword(req.body.password)) return res.status(400).json({succes:false, message:"Password is not correct"})

    const userData = user.toObject()
    delete userData.password
    // Give all the entire user object as the payload to createToken method.
    const token = serverAuth.createToken(userData);
    res.status(202).json({success:true, token: token, user: user});
  })
})

usersRouter.route('/')
  .get(usersCtrl.index)
  .post(usersCtrl.create)

usersRouter.use(serverAuth.authorize)

usersRouter.route('/:id')
  .get(usersCtrl.show)
  .patch(usersCtrl.update)
  .delete(usersCtrl.destroy)

module.exports = usersRouter
