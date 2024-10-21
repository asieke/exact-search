import { sections } from '../data/sample';
import { ExactSearch } from './search';
import { expect, test } from 'vitest';

const index = new ExactSearch({
  data: sections,
  indexFields: ['title', 'content'],
  resultFields: ['title', 'pageSlug', 'slug'],
});

//create a test in vitest that will test the search function

test('[search]: npm', () => {
  const results = index.search('endpoint');
  expect(results[0].match?.title).toEqual('Endpoint');
  expect(results[0].result.pageSlug).toEqual('weather');
});

test('[search]: api doc', () => {
  const results = index.search('api doc'); // console.log(results);
  expect(results[0].match?.title).toEqual('API Documentation');
  expect(results[0].result.pageSlug).toEqual('api-item');
});

test('[search]: api (types)', () => {
  const index = new ExactSearch<['title', 'content'], ['title', 'pageSlug', 'slug']>({
    data: sections, // sections is of type Record<string, string>[]
    indexFields: ['title', 'content'],
    resultFields: ['title', 'pageSlug', 'slug'],
  });

  const results = index.search('api');

  // Assertions
  expect(results).toHaveLength(10);
  expect(results[0].match?.title).toEqual('API Base URL');
  expect(results[0].result.slug).toEqual('api-base-url');
  expect(results[0].score).toEqual(0.5641025641025641);
});
