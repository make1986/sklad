import mongoose from "mongoose";

import "../Models/City";

const City = mongoose.model("City");

module.exports.PushCity = data => {
  const {
    ID,
    FullName,
    CityName,
    OblName,
    Center,
    NalSumLimit,
    EngName,
    PostCodeList,
    EngFullName,
    EngOblName,
    CountryCode,
    CountryName,
    EngCountryName,
    FullNameFIAS,
    FIAS,
    KLADR,
    cityDD,
    pvzCode
  } = data;
  return City.findOne({ CityID: ID }, (err, doc) => {
    if (err) {
      return { ok: false };
    }
    if (doc) {
      return City.findByIdAndUpdate(
        { id: doc._id },
        {
          $set: {
            CityID: ID,
            FullName,
            CityName,
            OblName,
            Center,
            NalSumLimit,
            EngName,
            PostCodeList,
            EngFullName,
            EngOblName,
            CountryCode,
            CountryName,
            EngCountryName,
            FullNameFIAS,
            FIAS,
            KLADR,
            cityDD,
            pvzCode
          }
        },
        (err, docum) => {
          if (err) {
            return { ok: false };
          }
          return { ok: true };
        }
      );
    } else {
      let newCity = new City({
        CityID: ID,
        FullName,
        CityName,
        OblName,
        Center,
        NalSumLimit,
        EngName,
        PostCodeList,
        EngFullName,
        EngOblName,
        CountryCode,
        CountryName,
        EngCountryName,
        FullNameFIAS,
        FIAS,
        KLADR,
        cityDD,
        pvzCode
      });
      return newCity.save({}, (err, doc) => {
        if (err) {
          return { ok: false };
        }
        return { ok: true };
      });
    }
  });
};
