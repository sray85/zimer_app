import mongoose from "mongoose";

const zimmerInfoShcems = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    region: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("zimmerdata", zimmerInfoShcems);
