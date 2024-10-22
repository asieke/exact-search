import { sections } from '../data/sample';
import { createClient } from './search';
import { expect, test } from 'vitest';

type Result = {
  match: {
    title: string;
    content: string;
  };
  data: {
    title: string;
    pageSlug: string;
    slug: string;
  };
};

const index = createClient<Result>({
  data: sections,
  matchFields: ['title', 'content'] as const,
  dataFields: ['title', 'pageSlug', 'slug'],
});

//create a test in vitest that will test the search function

test('[search]: npm', () => {
  const results = index.search('endpoint');
  expect(results[0].match.title?.data).toEqual('Endpoint');
  expect(results[0].data.pageSlug).toEqual('weather');
});

test('[search]: api doc', () => {
  const results = index.search('api doc'); // console.log(results);
  expect(results[0].match?.title?.data).toEqual('Todo List Search API Documentation');
  expect(results[0].data.pageSlug).toEqual('api-item');
});
