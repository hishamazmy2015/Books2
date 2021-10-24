import mongoose from "mongoose";
import ICitizen from "../interfaces/citizen";

const Schema = mongoose.Schema;
const citizenSchema = new Schema({
  isCitizen: {
    type: Boolean,
    required: true,
  },
  Name: { type: String, required: true },
  EIDA: { type: Number, required: true },
  Children: {
    type: Map,
    of: Number,
  },
  hasDrivingLicense: { type: Boolean, required: true },
});
export default mongoose.model<ICitizen>("Citizen", citizenSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const citizenSchema = new Schema({
//   isCitizen: {
//     type: Boolean,
//     required: true,
//   },
//   Name: { type: String, required: true },
//   Children: {
//     type: Map,
//     of: Number,
//   },
//   hasDrivingLicense: { type: Boolean, required: true },
// });

// module.exports = mongoose.model("Citizen", citizenSchema);
