// import { createClient, type SearchResult } from '../dist/index';
import { createClient, type SearchResult } from './search';

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

// Define the data
const data = [
  { id: 1, name: 'Alice Loves', bio: 'Loves programming', age: 30, isActive: true },
  { id: 2, name: 'Bob', bio: 'Enjoys hiking', age: 25, isActive: false },
  { id: 3, name: 'Charlie', bio: 'Loves to travel', age: 35, isActive: true },
  { id: 4, name: 'Dave', bio: 'Loves code', age: 35, isActive: true },
];

// Create the search client without specifying generic parameters
const index = createClient<Result>({
  data,
  matchFields: ['name', 'bio'],
  dataFields: ['id', 'name', 'bio', 'age'],
});

// Perform a search
const searchResults: SearchResult<Result>[] = index.search('Loves', 3);

console.log(JSON.stringify(searchResults, null, 2));
