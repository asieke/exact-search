"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ExactSearch: () => ExactSearch,
  createClient: () => createClient
});
module.exports = __toCommonJS(src_exports);

// src/search.ts
var ExactSearch = class {
  constructor(params) {
    this.data = params.data;
    this.matchFields = params.matchFields;
    this.resultFields = params.resultFields;
  }
  /**
   * Performs the search operation.
   * @param query The search string.
   * @param limit The maximum number of results to return.
   * @returns An array of search results.
   */
  search(query, limit = 10) {
    const results = [];
    const regex = new RegExp(`\\b${this.escapeRegExp(query)}`, "i");
    this.data.forEach((item) => {
      const matches = {};
      let score = 0;
      this.matchFields.forEach((field) => {
        const fieldValue = item[field];
        if (typeof fieldValue !== "string") {
          return;
        }
        const match = fieldValue.match(regex);
        if (match) {
          const startIndex = match.index;
          const substring = fieldValue.substring(
            startIndex,
            Math.min(startIndex + 30, fieldValue.length)
          );
          matches[field] = substring;
          const count = (fieldValue.match(regex) || []).length;
          const words = fieldValue.split(/\s+/).length;
          score += count / words;
        }
      });
      if (Object.keys(matches).length > 0) {
        const resultData = {};
        this.resultFields.forEach((field) => {
          resultData[field] = item[field];
        });
        results.push({
          matches,
          score,
          results: resultData
        });
      }
    });
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, limit);
  }
  /**
   * Escapes special characters in a string for use in a regular expression.
   * @param text The input string.
   * @returns The escaped string.
   */
  escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
};
function createClient(params) {
  return new ExactSearch(params);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExactSearch,
  createClient
});
//# sourceMappingURL=index.js.map