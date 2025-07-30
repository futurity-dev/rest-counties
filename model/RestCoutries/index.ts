import mongoose, { Schema,models } from 'mongoose';

const LocationSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  state_id: { type: Number, required: true },
  state_code: { type: String, required: true },
  state_name: { type: String, required: true },
  country_id: { type: Number, required: true },
  country_code: { type: String, required: true },
  country_name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  wikiDataId: { type: String, required: true }
},{
    collection:"cities"
});

export const Cities = models.cities || mongoose.model('cities', LocationSchema);



