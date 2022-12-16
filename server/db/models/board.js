const {Schema, model} = require("mongoose")

const boardSchema = new Schema({
    name: {
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

module.exports = model("Board", boardSchema)
