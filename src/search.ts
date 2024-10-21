export type Result<
  TIndexFields extends readonly string[],
  TResultFields extends readonly string[]
> = {
  match: Partial<Record<TIndexFields[number], string>> | null;
  score: number;
  result: Record<TResultFields[number], string>;
};

export class ExactSearch<
  TIndexFields extends readonly string[],
  TResultFields extends readonly string[]
> {
  private data: Record<string, string>[];
  private indexFields: TIndexFields;
  private resultFields: TResultFields;

  constructor(params: {
    data: Record<string, string>[];
    indexFields: TIndexFields;
    resultFields: TResultFields;
  }) {
    this.data = params.data;
    this.indexFields = params.indexFields;
    this.resultFields = params.resultFields;
  }

  public search(query: string, limit: number = 10): Result<TIndexFields, TResultFields>[] {
    const results: Result<TIndexFields, TResultFields>[] = [];

    this.data.forEach((item) => {
      let temp: Result<TIndexFields, TResultFields> = {
        match: null,
        score: 0,
        result: {} as Record<TResultFields[number], string>,
      };

      this.indexFields.forEach((field) => {
        const fieldValue = item[field];
        if (!fieldValue) return;

        const regex = new RegExp(`\\b${query}`, 'i');
        const match = fieldValue.match(regex);

        if (match) {
          const startIndex = match.index!;
          const count = fieldValue.toLowerCase().split(regex).length - 1;
          const words = fieldValue.split(' ').length;

          this.resultFields.forEach((resultField) => {
            temp.result[resultField as TResultFields[number]] = item[resultField];
          });

          const substr = fieldValue.substring(startIndex, startIndex + 30);
          temp.match = temp.match || {};
          temp.match[field as TIndexFields[number]] = substr; // Type assertion added here
          temp.score += count / words;
        }
      });

      if (temp.match) {
        results.push(temp);
      }
    });

    results.sort((a, b) => b.score - a.score);

    return results.slice(0, limit);
  }
}
