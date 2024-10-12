import { Schema, model, Types } from "mongoose";

const volcanoesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  elevation: {
    type: Number,
    required: true,
  },
  lastEruption: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  typeVolcano: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  voteList: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
  owner: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
});

const Volcanoes = model("Volcanoes", volcanoesSchema);

export default Volcanoes;
