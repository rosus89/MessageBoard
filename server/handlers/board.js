const db = require('../db')
// Board create


exports.get = async (req,res) => {
  try {
    const boards = await db.Board.find({}).populate({
      path: 'posts',
      populate: {
        path: 'user'
      }
    })
    return res.status(200).json(boards)
  }
  catch (err){
    return res.status(400).json(err)
  }
}

exports.create = async (req, res, next) => {
    try{
        let board = await db.Board.create({
          ...req.body, 
          created:Date.now(),
          // add id of creator
          // owner: req.params.id
          })
          const boards = await db.Board.find({})
        return res.status(200).json(boards)
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

