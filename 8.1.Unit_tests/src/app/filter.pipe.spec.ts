import { FilterPipe } from './filter.pipe';
import { News } from './news';
/// <reference path="./news.matcher.d.ts"/>

describe('FilterPipe', () => {
  beforeEach(function () {
    jasmine.addMatchers({
      hasNoFilteredResults: function () {
        return {
          compare: function (actual: News[], expected) {
            return { pass: !!(actual && actual.length === 0) };
          }
        }
      }
    });
  });

  const pipe = new FilterPipe();

  const expectedData: News[] = [{
    source: {
      id: "EXTERNAL1",
      name: "EXTERNAL1"
    },
    author: "FlatOutCrypto",
    title: "Title1",
    description: "description1",
    url: "https://hackernoon.com/save-the-ico-34287dbbce03",
    urlToImage: "https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n",
    publishedAt: new Date("2019-02-13T13:31:01Z"),
    content: "Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"
  }, {
    source: {
      id: "EXTERNAL2",
      name: "EXTERNAL2"
    },
    author: "FlatOutCrypto",
    title: "Title2",
    description: "description2",
    url: "https://hackernoon.com/save-the-ico-34287dbbce03",
    urlToImage: "https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n",
    publishedAt: new Date("2019-02-13T13:31:01Z"),
    content: "Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"
  }];


  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filter pipe should return filtered by title news', () => {
    let term = "title";
    expect(pipe.transform(expectedData, term)).toEqual(expectedData);
  });

  it('filter pipe shouldn\'t return filtered by title news', () => {
    let term = "notTitle";
    expect(pipe.transform(expectedData, term)).toEqual([]);
  });

  it('filter pipe shouldn\'t return filtered by description news', () => {
    let term = "description";
    expect(pipe.transform(expectedData, term)).toEqual(expectedData);
  });

  it('filter pipe shouldn\'t return filtered by description news', () => {
    let term = "notDescription";
    expect(pipe.transform(expectedData, term)).toEqual([]);
  });

});
