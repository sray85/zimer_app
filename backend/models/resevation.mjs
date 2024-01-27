import mongoose from "mongoose";

const zimmerResevationSchema = new mongoose.Schema(
  {
    zimmerId: {
      type: String,
      required: true,
    },

    zimmerName: {
      type: String,
      required: true,
    },

    zimmerUnitResevation: {
      type: Array,
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("zimmerResevation", zimmerResevationSchema);
