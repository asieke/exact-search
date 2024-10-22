export interface SearchResult<R extends { matches: any; results: any }> {
  matches: Partial<R['matches']>;
  results: R['results'];
  score: number;
}

interface ExactSearchParams<R extends { matches: any; results: any }> {
  data: Array<Record<string, any>>;
  matchFields: Array<keyof R['matches']>;
  resultFields: Array<keyof R['results']>;
}

/**
 * ExactSearch class performs exact search operations on provided data.
 */
export class ExactSearch<R extends { matches: any; results: any }> {
  private data: Array<Record<string, any>>;
  private matchFields: Array<keyof R['matches']>;
  private resultFields: Array<keyof R['results']>;

  constructor(params: ExactSearchParams<R>) {
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
  search(query: string, limit: number = 10): SearchResult<R>[] {
    const results: SearchResult<R>[] = [];
    const regex = new RegExp(`\\b${this.escapeRegExp(query)}`, 'i');

    this.data.forEach((item) => {
      const matches: Partial<R['matches']> = {};
      let score = 0;

      this.matchFields.forEach((field) => {
        const fieldValue = item[field as keyof typeof item];
        if (typeof fieldValue !== 'string') {
          return;
        }

        const match = fieldValue.match(regex);
        if (match) {
          const startIndex = match.index as number;
          const substring = fieldValue.substring(
            startIndex,
            Math.min(startIndex + 30, fieldValue.length)
          );
          matches[field] = substring;

          // Calculate score based on number of matches and field length
          const count = (fieldValue.match(regex) || []).length;
          const words = fieldValue.split(/\s+/).length;
          score += count / words;
        }
      });

      if (Object.keys(matches).length > 0) {
        const resultData: Partial<R['results']> = {};
        this.resultFields.forEach((field) => {
          resultData[field] = item[field as keyof typeof item];
        });

        results.push({
          matches: matches as R['matches'],
          score,
          results: resultData as R['results'],
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
export function createClient<R extends { matches: any; results: any }>(
  params: ExactSearchParams<R>
): ExactSearch<R> {
  return new ExactSearch<R>(params);
}
