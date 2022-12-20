const db = require('../db')

exports.create = async (req, res, next) => {
    try{
        let post = await db.Post.create({
          value: req.body.value, 
          created:Date.now(),
          user: req.body.user,
          board: req.body.board
          })
          const board = await db.Board.findById(req.body.board)
          board.posts.push(post._id);
          await board.save();
        return res.status(200).json("posted")
    }    
    catch (err) {
      console.log(err)
    }
}

// exports.get = async (req, res, next) => {
//     try{

//         return res.status(200).json(posts)
//     }    
//     catch (err) {
//       console.log(err)
//     }
// }
