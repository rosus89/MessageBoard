const db = require('../db')

exports.createBoard  = async (req, res, next) => {
    try{
        let user = await db.Board.create({...req.body, created:Date.now(), updated:Date.now()});
        return res.status(200).json(true)
    }    
    catch (err) {
      if (err.code === 11000) {
        err.message = "Board name already used";
      }
      return next({
        status: 400,
        message: err.message
      });
    }

}