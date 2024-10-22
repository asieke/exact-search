export interface SearchResult<R extends { match: any; data: any }> {
  // Updated from results to data
  match: { [K in keyof R['match']]?: { data: string; index: number } };
  data: R['data']; // Updated from results to data
  score: number;
}

interface ExactSearchParams<R extends { match: any; data: any }> {
  // Updated from results to data
  data: Array<Record<string, any>>;
  matchFields: Array<keyof R['match']>;
  dataFields: Array<keyof R['data']>; // Updated from resultFields to dataFields
}

export class ExactSearch<R extends { match: any; data: any }> {
  // Updated from results to data
  private data: Array<Record<string, any>>;
  private matchFields: Array<keyof R['match']>;
  private dataFields: Array<keyof R['data']>; // Updated from resultFields to dataFields

  constructor(params: ExactSearchParams<R>) {
    this.data = params.data;
    this.matchFields = params.matchFields;
    this.dataFields = params.dataFields; // Updated from resultFields to dataFields
  }

  /**
   * Performs the search operation.
   * @param query The search string.
   * @param limit The maximum number of results to return.
   * @returns An array of search results.
   */
  search(query: string, limit: number = 10): SearchResult<R>[] {
    const results: SearchResult<R>[] = [];
    const regex = new RegExp(`\\b${this.escapeRegExp(query)}`, 'i');

    this.data.forEach((item) => {
      const matches: Partial<R['match']> = {};
      let score = 0;

      this.matchFields.forEach((field) => {
        const fieldValue = item[field as keyof typeof item];
        if (typeof fieldValue !== 'string') {
          return;
        }

        const match = fieldValue.match(regex);
        if (match) {
          const startIndex = match.index as number;

          matches[field] = {
            data: fieldValue,
            index: startIndex,
          };

          // Calculate score based on number of matches and field length
          const count = (fieldValue.match(regex) || []).length;
          const words = fieldValue.split(/\s+/).length;
          score += count / words;
        }
      });

      if (Object.keys(matches).length > 0) {
        const resultData: Partial<R['data']> = {}; // Updated from results to data
        this.dataFields.forEach((field) => {
          // Updated from resultFields to dataFields
          resultData[field] = item[field as keyof typeof item];
        });

        results.push({
          match: matches as R['match'],
          score,
          data: resultData as R['data'], // Updated from results to data
        });
      }
    });

    // Sort results by score in descending order
    results.sort((a, b) => b.score - a.score);

    // Return limited results
    return results.slice(0, limit);
  }

  /**
   * Escapes special characters in a string for use in a regular expression.
   * @param text The input string.
   * @returns The escaped string.
   */
  private escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

/**
 * Factory function to create an ExactSearch client.
 * @param params Parameters for initializing the ExactSearch client.
 * @returns An instance of ExactSearch.
 */
export function createClient<R extends { match: any; data: any }>(
  params: ExactSearchParams<R>
): ExactSearch<R> {
  return new ExactSearch<R>(params);
}
