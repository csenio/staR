const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    image: String,
    title: String,
    upvotes: Number,
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

tweetSchema.index({ createdAt: 1 });

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
