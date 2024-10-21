type Params = {
    data: Record<string, string>[];
    indexFields: string[];
    resultFields: string[];
};
type Result = {
    match: Record<string, string> | null;
    score: number;
    result: Record<string, string>;
};
declare class ExactSearch {
    private data;
    private indexFields;
    private resultFields;
    constructor({ data, indexFields, resultFields }: Params);
    search(query: string, limit?: number): Result[];
}

export { ExactSearch, Result };
