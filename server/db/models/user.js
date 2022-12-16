const {Schema, model} = require("mongoose")
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        immutable: true
    },
    posts: [ { type: Schema.Types.ObjectId, ref: 'Post' }]
})
userSchema.pre("save", async function(next) {
    try {
      if (!this.isModified("password")) {
        return next();
      }
      let hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      return next();
    } catch (err) {
      return next(err);
    }
  });

userSchema.methods.comparePassword = async function(formPassword, next) {
try {
    let passwordsMatch = await bcrypt.compare(formPassword, this.password);
    return passwordsMatch;
} catch (err) {
    return next(err);
}
};

module.exports = model("User", userSchema)