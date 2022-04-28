import { Schema, model } from "mongoose";

const LikeSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  exercises: {
    type: Array,
  },
  foods: {
    type: Array,
  },
  users: {
    type: Array,
  },
  musics: {
    type: Array,
  }
});

const LikeModel = model("Like", LikeSchema);

export { LikeModel };
