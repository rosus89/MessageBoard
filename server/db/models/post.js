const {Schema, model} = require("mongoose")
const User = require('./user')

const postSchema = new Schema({
    value: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    board: {
        type:Schema.Types.ObjectId,
        ref: "Board"
    },
    created: {
      type: Date,
      required: true,
      immutable: true
    }
})
// postSchema.pre("remove", async function(next) {
//     try {
//       let user = await User.findById(this.user);
//       user.messages.remove(this.id);
//       await user.save();
//       return next();
//     } catch (err) {
//       return next(err);
//     }
//   });


module.exports = model("Post", postSchema)