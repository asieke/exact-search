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
export {
  ExactSearch,
  createClient
};
//# sourceMappingURL=index.mjs.map