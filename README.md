# Exact Search

`exact-search` is a lightweight, 0-dependency library designed to perform exact searches on a JSON array. It allows you to specify fields to index and fields to return in the search results, making it flexible for various use cases.

## Installation

To install the package, use npm:

```bash
npm install exact-search
```

## Constructor

The `createClient` function is used to initialize the search client. It requires an object with the following properties:

- `data`: An array of objects that you want to search through.
- `matchFields`: An array of strings specifying which fields in the data should be indexed for searching.
- `dataFields`: An array of strings specifying which fields should be included in the search results.

## API Parameters

- `search(query: string, limit: number)`: Performs a search on the indexed data.
  - `query`: A string representing the search term.
  - `limit`: A number specifying the maximum number of results to return.

## API Response

The search results are returned as an array of objects, each containing the following properties:

| Property | Type   | Contents/Structure                               | Description                                                                                                                                                                                                                                                   |
| -------- | ------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`  | Object | `{ fieldName: { data: string, index: number } }` | An object containing the fields that matched the search query. Each field includes the entire original field value and the index where the match starts.                                                                                                      |
| `data`   | Object | `{ fieldName: fieldValue }`                      | An object containing the fields specified in `dataFields` from the original data.                                                                                                                                                                             |
| `score`  | Number | -                                                | A number representing the relevance of the result. The score is calculated based on the number of matches found in the `matchFields` and the length of the field. Specifically, it is the ratio of the number of matches to the number of words in the field. |

Example response:

```json
[
  {
    "match": {
      "name": {
        "data": "Alice Loves",
        "index": 6
      },
      "bio": {
        "data": "Loves programming",
        "index": 0
      }
    },
    "score": 1,
    "data": {
      "id": 1,
      "name": "Alice Loves",
      "bio": "Loves programming",
      "age": 30
    }
  },
  {
    "match": {
      "bio": {
        "data": "Loves code",
        "index": 0
      }
    },
    "score": 0.5,
    "data": {
      "id": 4,
      "name": "Dave",
      "bio": "Loves code",
      "age": 35
    }
  }
]
```

## Usage (Typescript)

Here's a basic example of how to use `exact-search`:

```typescript
import { createClient, SearchResult } from 'exact-search';

// Define the data
const data = [
  { id: 1, name: 'Alice Loves', bio: 'Loves programming', age: 30, isActive: true },
  { id: 2, name: 'Bob', bio: 'Enjoys hiking', age: 25, isActive: false },
  { id: 3, name: 'Charlie', bio: 'Loves to travel', age: 35, isActive: true },
  { id: 4, name: 'Dave', bio: 'Loves code', age: 35, isActive: true },
];

// Define the Result type
type Result = {
  match: {
    name: string;
    bio: string;
  };
  data: {
    id: number;
    name: string;
    bio: string;
    age: number;
  };
};

// Create the search client without specifying generic parameters
const index = createClient<Result>({
  data,
  matchFields: ['name', 'bio'],
  dataFields: ['id', 'name', 'bio', 'age'],
});

// Perform a search
const searchResults: SearchResult<Result>[] = index.search('Loves', 2);
```

## Usage (Javascript)

```javascript
import { createClient } from 'exact-search';

// Define the data
const data = [
  { id: 1, name: 'Alice Loves', bio: 'Loves programming', age: 30, isActive: true },
  { id: 2, name: 'Bob', bio: 'Enjoys hiking', age: 25, isActive: false },
  { id: 3, name: 'Charlie', bio: 'Loves to travel', age: 35, isActive: true },
  { id: 4, name: 'Dave', bio: 'Loves code', age: 35, isActive: true },
];

// Create the search client without specifying generic parameters
const index = createClient({
  data,
  matchFields: ['name', 'bio'],
  dataFields: ['id', 'name', 'bio', 'age'],
});

// Perform a search
const searchResults = index.search('Loves', 10);

console.log(searchResults);
```
