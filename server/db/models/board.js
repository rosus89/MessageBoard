const {Schema, model} = require("mongoose")
const User = require('./user')

const boardSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        immutable: true
    },
    updated: {
        type: Date,
        required:true
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        immutable: true
    },
    posts: [
        { type: Schema.Types.ObjectId, ref: 'Post' }
    ]
})

boardSchema.pre("remove", async function(next) {
    try {
        
      let user = await User.findById(this.user);
      user.messages.remove(this.id);
      await user.save();
      return next();
    } catch (err) {
      return next(err);
    }
  });

module.exports = model("Board", boardSchema)
