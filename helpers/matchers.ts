import * as _ from 'lodash';

beforeEach(() => {
  jasmine.addMatchers({
    toBeArrayCaseInsensetive: () => {
      return {
        compare(actual, expected) {
          return {
            pass: matchArray(arrayToUpperCase(actual), arrayToUpperCase(expected))
          };
        }
      };
    }
  });

  jasmine.addMatchers({
    toBeCaseInsensetive: () => {
      return {
        compare(actual, expected) {
          return {
            pass: actual.toUpperCase() === expected.toUpperCase()
          };
        }
      };
    }
  });
});

function arrayToUpperCase(array) {
  return array.map((x) => x.toUpperCase());
}

function matchArray(arr1, arr2) {
  return Promise.resolve(_.isEqual(arr1, arr2));
}
