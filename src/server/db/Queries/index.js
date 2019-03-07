/*
  Параметры запроса:
  params. Состоит из строки, в которой указываются 
*/

export default class DataBase {
  constructor(Model) {
    this.Model = Model;
    this.getByParams = this.getByParams.bind(this);
    this.getParams = this.getParams.bind(this);
    this.getSort = this.getSort.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.getValueForParams = this.getValueForParams.bind(this);
    this.getValueForSearch = this.getValueForSearch.bind(this);
    this.getMinOrMax = this.getMinOrMax.bind(this);
  }
  getByParams(params) {
    const { limit, page, sort, search } = params;
    const skip = (page - 1) * limit;
    console.log("params", this.getParams(params.params));
    console.log("search", this.getSearch(search));
    console.log("limit", limit);
    console.log("sort", this.getSort(sort));
    console.log("skip", skip);
    return new Promise((resolve, reject) => {
      this.Model.find({
        $and: [this.getParams(params.params), this.getSearch(search)]
      })
        .limit(Number(limit))
        .sort(this.getSort(sort))
        .skip(Number(skip))
        .exec((err, docs) => {
          if (err) {
            reject({ ok: false, err });
          }
          resolve({ ok: true, data: docs });
        });
    });
  }
  getMinOrMax(param) {
    let max = param.indexOf("+lte");
    let min = param.indexOf("+gte");
    let value = param;
    if (max >= 0) {
      value = { $lte: param.substring(max + 4, param.length) };
    } else if (min >= 0) {
      value = { $gte: param.substring(min + 4, param.length) };
    }
    return value;
  }
  getParams(params) {
    let result = {};
    params = decodeURIComponent(params);
    if (params && params !== undefined) {
      const and = params.split("&&");
      result.$and = [];
      and.map((el, idx) => {
        const or = el.split("||");
        result.$and[idx] = { $or: [] };
        or.map(elem => {
          const param = elem.split("=");
          if (param.length === 2) {
            result.$and[idx].$or.push({
              [param[0]]: this.getValueForParams(param[1])
            });
          }
        });
      });
    }
    return result;
  }
  getValueForParams(param) {
    let indexArr = param.indexOf("+in");
    let indexObj = param.indexOf("+elem");
    if (indexObj < 0 && indexArr < 0) {
      return this.getMinOrMax(param);
    } else if (
      indexObj < 0 ||
      (indexArr >= 0 && indexObj >= 0 && indexArr < indexObj)
    ) {
      let value = param.substring(indexArr + 3, param.length);
      return { $in: this.getValueForParams(value) };
    } else if (
      indexArr < 0 ||
      (indexArr >= 0 && indexObj >= 0 && indexObj < indexArr)
    ) {
      let value = param.substring(indexObj + 5, param.length);
      let sepIdx = value.indexOf("+:");
      let elemKey = value.substring(0, sepIdx);
      let elemVal = value.substring(sepIdx + 2, value.length);
      return { $elemMatch: { [elemKey]: this.getValueForParams(elemVal) } };
    }
  }
  getValueForSearch(param) {
    let indexArr = param.indexOf("+in");
    let indexObj = param.indexOf("+elem");
    if (indexObj < 0 && indexArr < 0) {
      return new RegExp(param, "i");
    } else if (
      indexObj < 0 ||
      (indexArr >= 0 && indexObj >= 0 && indexArr < indexObj)
    ) {
      let value = param.substring(indexArr + 3, param.length);
      return { $in: this.getValueForSearch(value) };
    } else if (
      indexArr < 0 ||
      (indexArr >= 0 && indexObj >= 0 && indexObj < indexArr)
    ) {
      let value = param.substring(indexObj + 5, param.length);
      let sepIdx = value.indexOf("+:");
      let elemKey = value.substring(0, sepIdx);
      let elemVal = value.substring(sepIdx + 2, value.length);
      return { $elemMatch: { [elemKey]: this.getValueForSearch(elemVal) } };
    }
  }
  getSort(sort) {
    let result = {};
    if (sort && sort !== undefined) {
      const arr = sort.split("=");
      if (arr.length === 2) {
        result[arr[0]] = arr[1];
      }
    }
    return result;
  }
  getSearch(search) {
    let result = { $or: [] };
    search = decodeURIComponent(search);
    if (search && search !== undefined) {
      const arr = search.split("||");
      arr.map(el => {
        const sub = el.split("=");
        if (sub.length === 2) {
          result.$or.push({ [sub[0]]: this.getValueForSearch(sub[1]) });
        }
      });
    }
    return result;
  }
}
