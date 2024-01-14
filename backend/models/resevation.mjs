import mongoose from "mongoose";

const zimmerResevationSchema = new mongoose.Schema(
  {
    zimmerId: {
      type: String,
      require: true,
    },

    zimmerName: {
      type: String,
      require: true,
    },

    zimmerUnitResevation: {
      type: Array,
      require: true,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("zimmerResevation", zimmerResevationSchema);

