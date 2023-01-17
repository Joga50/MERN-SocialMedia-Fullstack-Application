import mongoose from "mongoose";

const commenctSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    description: {
      type: String,
      required: true,
    },
    userPicturePath: String,
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commenctSchema);

export default Comment;
