const db = require('../db')
const jwt = require('jsonwebtoken')


exports.signUp  = async (req, res, next) => {
    try{
        let user = await db.User.create({...req.body, created:Date.now()});
        let { _id, username, email } = user;
        let token = jwt.sign(
            {
            _id,
            username,
            email
            },
            process.env.TOKEN_SECRET
        )
        return res.status(200).json({_id,username,email,token})
    }    
    catch (err) {
      if (err.code === 11000) {
        err.message = "Username or email is taken";
      }
      return next({
        status: 400,
        message: err.message
      });
    }

}

exports.signIn  = async (req, res, next) => {
  try {
    let user = await db.User.findOne({
      email: req.body.email
    });
    let { _id, username, email } = user;
    let passwordsMatch = await user.comparePassword(req.body.password);
    console.log(passwordsMatch)
    if (passwordsMatch) {
      let token = jwt.sign(
        {
          _id,
          username,
          email
        },
        process.env.TOKEN_SECRET
      );
      return res.status(200).json({
        _id,
        username,
        email,
        token
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password."
      });
    }
  } catch (e) {
    return next({ status: 400, message: "Invalid Email/Password." });
  }

}