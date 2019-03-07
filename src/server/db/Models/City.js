const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CitySchema = new Schema(
  {
    CityID: {
      type: String
    },
    FullName: {
      type: String
    },
    CityName: {
      type: String
    },
    OblName: {
      type: String
    },
    Center: {
      type: String
    },
    NalSumLimit: {
      type: String
    },
    EngName: {
      type: String
    },
    PostCodeList: {
      type: String
    },
    EngFullName: {
      type: String
    },
    EngOblName: {
      type: String
    },
    CountryCode: {
      type: String
    },
    CountryName: {
      type: String
    },
    EngCountryName: {
      type: String
    },
    FullNameFIAS: {
      type: String
    },
    FIAS: {
      type: String
    },
    KLADR: {
      type: String
    },
    cityDD: {
      type: String
    },
    pvzCode: {
      type: String
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const City = mongoose.model("City", CitySchema);
