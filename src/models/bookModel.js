const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true
        },

        excerpt: {
            type: String,
            require: true
        },
        userId: {
            type: ObjectId,
            require: true,
            ref: "User"
        },
        ISBN: {
            type: String,
            require: true,
            unique: true
        },
        category: {
            type: String,
            require: true
        },
        subcategory: {
            type: String,
            require: true
        },
        reviews: {
            type: Number,
            default: 0,
            comment: "Holds number of reviews of this book"
        },
        deletedAt: {
            type: Date,
            default: null
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        releasedAt: {
            type: Date,
            required: true,
        },

    }, { timestamps: true }

);

module.exports = mongoose.model("Book", bookSchema)
