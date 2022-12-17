const {Schema, model} = require("mongoose")

const postSchema = new Schema({
    value: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        immutable: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})
postSchema.pre("remove", async function(next) {
    try {
      let user = await User.findById(this.user);
      user.messages.remove(this.id);
      await user.save();
      return next();
    } catch (err) {
      return next(err);
    }
  });


module.exports = model("Post", postSchema)