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
    updated: {
        type: Date,
        required:true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = model("Post", postSchema)