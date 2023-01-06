import { AbstractCacheAlgo } from "../abstractClass";

export class FifoCacheAlgo<K, V> extends AbstractCacheAlgo<K, V> {
    cachePages: Map<K, V>;
    private keys: K[];
  
    constructor(capacity: number) {
      super(capacity);
      this.cachePages = new Map<K, V>();
      this.keys = [];
    }
    //is it the same for all of the algorithms? 
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
        //there is a problem because of abstract - in abstract it returns undefined. i might return key
    setElement (key: K, value: V): undefined | K {
        if (this.cachePages.has(key)){
            this.removeElement(key);
            this.setElement(key,value);
            return key;
        }else if (this.cachePages.size < this.capacity){
            this.cachePages.set(key,value);
            this.keys.push(key);
            return undefined;
        }else {
            const keyToPop = this.keys.pop()
            this.cachePages.delete(keyToPop!)
            this.cachePages.set(key,value)
            return undefined;
        }
    }

}
