interface SearchResult<R extends {
    matches: any;
    results: any;
}> {
    matches: Partial<R['matches']>;
    results: R['results'];
    score: number;
}
interface ExactSearchParams<R extends {
    matches: any;
    results: any;
}> {
    data: Array<Record<string, any>>;
    matchFields: Array<keyof R['matches']>;
    resultFields: Array<keyof R['results']>;
}
/**
 * ExactSearch class performs exact search operations on provided data.
 */
declare class ExactSearch<R extends {
    matches: any;
    results: any;
}> {
    private data;
    private matchFields;
    private resultFields;
    constructor(params: ExactSearchParams<R>);
    /**
     * Performs the search operation.
     * @param query The search string.
     * @param limit The maximum number of results to return.
     * @returns An array of search results.
     */
    search(query: string, limit?: number): SearchResult<R>[];
    /**
     * Escapes special characters in a string for use in a regular expression.
     * @param text The input string.
     * @returns The escaped string.
     */
    private escapeRegExp;
}
/**
 * Factory function to create an ExactSearch client.
 * @param params Parameters for initializing the ExactSearch client.
 * @returns An instance of ExactSearch.
 */
declare function createClient<R extends {
    matches: any;
    results: any;
}>(params: ExactSearchParams<R>): ExactSearch<R>;

export { ExactSearch, SearchResult, createClient };
