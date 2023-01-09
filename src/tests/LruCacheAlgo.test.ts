import { expect } from "chai";
import { LruCacheAlgo } from "../cacheAlgorithms/LruCacheAlgo";

/*
mocha's template as per the documentation:

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
*/

describe("LRU cache algo", () => {
  //define cache type as per LruCacheAlgo class
  let cache: LruCacheAlgo<string, number>;

  beforeEach(() => {
    const testLruCapacity = 3;
    const cache = new LruCacheAlgo<string, number>(testLruCapacity);
  });

  it("should set keys1,2,3 with values 1,2,3", () => {
    cache.setElement("key1", 1);
    cache.setElement("key2", 2);
    cache.setElement("key3", 3);
    expect(cache.getElement("key1")).to.equal(1); // Output: 1
    expect(cache.getElement("key2")).to.equal(2); // Output: 2
    expect(cache.getElement("key3")).to.equal(3); // Output: 3
  });
});
