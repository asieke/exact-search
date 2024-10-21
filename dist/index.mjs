var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/search.ts
var ExactSearch = class {
  constructor({ data, indexFields, resultFields }) {
    this.data = data;
    this.indexFields = indexFields;
    this.resultFields = resultFields;
  }
  search(query, limit = 10) {
    const results = [];
    this.data.forEach((item) => {
      let temp = { match: null, score: 0, result: {} };
      this.indexFields.forEach((field) => {
        const regex = new RegExp(`\\b${query}`, "i");
        const match = item[field].match(regex);
        if (match) {
          const startIndex = match.index;
          const count = item[field].toLowerCase().split(regex).length - 1;
          const words = item[field].split(" ").length;
          this.resultFields.forEach((resultField) => {
            temp.result[resultField] = item[resultField];
          });
          const substr = item[field].substring(startIndex, startIndex + 30);
          temp.match = __spreadProps(__spreadValues({}, temp.match), { [field]: substr });
          temp.score += count / words;
        }
      });
      if (temp.match) {
        results.push(temp);
      }
    });
    results.sort((a, b) => b.score - a.score);
    if (results.length > limit) {
      return results.slice(0, limit);
    }
    return results;
  }
};
export {
  ExactSearch
};
//# sourceMappingURL=index.mjs.map