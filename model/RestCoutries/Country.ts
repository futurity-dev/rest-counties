import mongoose, { Schema,models } from "mongoose";

export interface ITimezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

const TimezoneSchema = new Schema<ITimezone>(
  {
    zoneName: { type: String, required: true },
    gmtOffset: { type: Number, required: true },
    gmtOffsetName: { type: String, required: true },
    abbreviation: { type: String, required: true },
    tzName: { type: String, required: true },
  },
  { _id: false }
);

const CountrySchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    iso3: { type: String, required: true },
    iso2: { type: String, required: true },
    numeric_code: { type: Number, required: true },
    phonecode: { type: Number, required: true },
    capital: { type: String, required: true },
    currency: { type: String, required: true },
    currency_name: { type: String, required: true },
    currency_symbol: { type: String, required: true },
    tld: { type: String, required: true },
    native: { type: String, required: true },
    region: { type: String, required: true },
    region_id: { type: Number, required: true },
    subregion: { type: String, required: true },
    subregion_id: { type: Number, required: true },
    nationality: { type: String, required: true },
    timezones: { type: [TimezoneSchema], required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    emoji: { type: String, required: true },
    emojiU: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "countries",
  }
);

export const Countries = models.countries || mongoose.model("countries", CountrySchema);


