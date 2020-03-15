const filterByTerm = require('../src/filterByTerm');

describe('Filter function', () => {
  test('it should filter by a search term (link)', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' }
    ];

    const output = [{ id: 3, url: 'https://www.link3.dev' }];

    expect(filterByTerm(input, 'link')).toEqual(output);

    expect(filterByTerm(input, 'LINK')).toEqual(output); // New test
  });

  // function filterByTerm(inputArr, searchTerm) {
  //   const regex = new RegExp(searchTerm, 'i');
  //   return inputArr.filter(function(arrayElement) {
  //     return arrayElement.url.match(regex);
  //   });
  // }

  test('it should be filter by a search term (uRl', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' }
    ];

    const output = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' }
    ];

    expect(filterByTerm(input, 'uRl')).toEqual(output);
  });

  test('it should throw when searchTerm is empty string', () => {
    // solution ex 2
    const input = [];
    expect(() => {
      filterByTerm(input, '');
    }).toThrowError(Error('searchTerm cannot be empty'));
  });
});
