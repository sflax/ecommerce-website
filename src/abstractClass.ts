import { ICacheAlgo } from "./ICacheAlgo";

export abstract class AbstractCacheAlgo<K, V> implements ICacheAlgo<K, V> {
  protected capacity: number;
  //to discuss whether cachePages should be excluded from the abstract or not
  cachePages: Map<K, V>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cachePages = new Map<K, V>();
  }

  getElement(key: K): V | undefined {
    //if we decide to keep cachePage, the following returns key
    return this.cachePages.get(key);
  }
  //need to decide whether to include setElement in the abstract class as it raises error i LRU
  setElement(key: K, value: V) {
    return undefined;
  }

  removeElement(key: K) {
    return true;
  }
}
