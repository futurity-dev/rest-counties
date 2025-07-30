import mongoose from "mongoose";



const regionSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    wikiDateId: { type: String, required: true },
});

export const Region = mongoose.models.Region || mongoose.model("Region", regionSchema);