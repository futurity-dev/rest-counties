import mongoose from "mongoose";

const statesSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  country_id: { type: Number, required: true },
  country_code: { type: String, required: true },
  country_name: { type: String, required: true },
  state_code: { type: String, required: true },
  type: { type: String }, // مثلاً province
  latitude: { type: Number },
  longitude: { type: Number },
}, { timestamps: true });

const States = mongoose.models.States || mongoose.model("States", statesSchema);

export default States;


