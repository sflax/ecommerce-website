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
}
