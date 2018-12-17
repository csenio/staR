const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    parentTweet: { type: Schema.Types.ObjectId, ref: "Tweet" },
    upvotes: Number,
    creator: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
