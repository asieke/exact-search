# Exact Search

**Version:** 1.1.0

## Description

`exact-search` is a lightweight library designed to perform exact searches on a JSON array. It allows you to specify fields to index and fields to return in the search results, making it flexible for various use cases.

## Installation

To install the package, use npm:

```bash
npm install exact-search
```

## Usage

Here's a basic example of how to use `exact-search`:

```typescript
import { ExactSearch } from 'exact-search';

// Sample data
const data = [
  {
    title: 'Introduction to the API',
    content: 'Welcome to the API documentation for our project...',
    pageSlug: 'introduction',
    slug: 'introduction-to-the-api',
  },
  {
    title: 'Overview',
    content: 'Our API provides a robust set of endpoints...',
    pageSlug: 'overview',
    slug: 'overview',
  },
  // Add more items as needed
];

// Initialize ExactSearch with generics
const searchIndex = new ExactSearch<['title', 'content'], ['title', 'pageSlug', 'slug']>({
  data,
  indexFields: ['title', 'content'],
  resultFields: ['title', 'pageSlug', 'slug'],
});

// Perform a search
const results = searchIndex.search('API', 5);
console.log(results);
```

## API

### `ExactSearch`

#### Constructor

```typescript
new ExactSearch<IndexFields extends string[], ResultFields extends string[]>({
  data,
  indexFields,
  resultFields,
}: Params<IndexFields, ResultFields>)
```

- **data**: An array of objects to search through.
- **indexFields**: An array of strings specifying which fields to index for searching.
- **resultFields**: An array of strings specifying which fields to include in the search results.

#### Methods

- **search(query: string, limit?: number): Result[]**

  Performs a search on the indexed fields.

  - **query**: The search term.
  - **limit**: Optional. The maximum number of results to return. Defaults to 10.

  Returns an array of results, each containing:

  - **match**: An object with the matched fields and their respective substrings.
  - **score**: A number representing the relevance of the result.
  - **result**: An object containing the specified result fields.

## Development

To build the project, run:

```bash
npm run build
```

To run tests, use:

```bash
npm test
```

## License

This project is licensed under the ISC License.

## Author

Alex Sieke

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments

- Thanks to the contributors of the open-source community for their invaluable support and resources.
