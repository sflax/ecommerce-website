import { AbstractCacheAlgo } from "../abstractClass";

export class LruCacheAlgo<K, V> extends AbstractCacheAlgo<K, V> {
  //each page stores data on the last time it has been used
  //
  cachePages: Map<K, V>; //to discuss if we prefer to work with objects instead of map
  //to consider double linked list implementation
  private keys: K[];

  constructor(capacity: number) {
    super(capacity);
    this.cachePages = new Map<K, V>();
    this.keys = [];
  }

  getElement(key: K): V | undefined {
    if (this.cachePages.has(key)) {
      const value = this.cachePages.get(key);
      this.keys = this.keys.filter((k) => k !== key);
      this.keys.push(key);
      return value;
    }
    return undefined;
  }

  removeElement(key: K): boolean {
    if (this.cachePages.has(key)) {
      this.keys = this.keys.filter((k) => k !== key);
      this.cachePages.delete(key);
      return true;
    }
    return false;
  }

  //to complete setElement and implement removeElement in it
  setElement(key: K, value: V): K | undefined {
    //in case the key exists it will be removed and set again
    if (this.cachePages.has(key)) {
      this.removeElement(key);
      this.setElement(key, value);
    } else {
      //if it doesn't exist and there is no capacity, the last item will be removed
      if (this.keys.length >= this.capacity) {
        const leastRecentKey = this.keys.shift();
        this.cachePages.delete(leastRecentKey!);
      }
      this.keys.push(key);
    }
    this.cachePages.set(key, value);
    return key;
  }
}

const testLruCapacity = 3;
const cache = new LruCacheAlgo<string, number>(testLruCapacity);

cache.setElement("key1", 1);
cache.setElement("key2", 2);
cache.setElement("key3", 3);

console.log(cache.getElement("key1")); // Output: 1
console.log(cache.getElement("key2")); // Output: 2
console.log(cache.getElement("key3")); // Output: 3

cache.setElement("key1", 4);

console.log(cache.getElement("key1")); // Output: 4
console.log(cache.getElement("key2")); // Output: 2
console.log(cache.getElement("key3")); // Output: 3

cache.setElement("key4", 5);

console.log(cache.getElement("key1")); // Output: 4
console.log(cache.getElement("key2")); // Output: 2
console.log(cache.getElement("key3")); // Output: 3
console.log(cache.getElement("key4")); // Output: 5
