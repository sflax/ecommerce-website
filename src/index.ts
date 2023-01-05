// First define interface ICacheAlgo with 3 methods: 



interface ICacheAlgo<K,V> {
    key: K;
    val: V;
    capacity:number;

    // getElement(K key) => (V or undefined) - Returns the value to which the specified key is mapped or undefined if this cache contains no mapping for the key 
    getElement(key: K):V | undefined;

    // setElement(K key, V value) => (K or undefined) - Associates the specified value with the specified key in this cache. 
    // If the key doesn’t exist - add the key-value entry to the cache according to the current algorithm. 
    // If the key exists already - the result of evaluation should be equal to sequential execution of removeElement with this key and then setElement. If during the setElement function some key was removed - the removed key will be returned, otherwise undefined 
    setElement(key:K,val:V):K;
    // removeElement(K key) => boolean - Removes the mapping for the specified key from this cache if present. If it was present - return true, otherwise false. 
    removeElement(key: K): boolean;

}

// Next define abstract class AbstractCacheAlgo - another abstraction level that helps to define and preserve all the data that is common to all the algorithms (for example capacity of the cache) and maybe to implement some common methods/logic that each algorithm has.
// ● Next you need to implement concrete classes that implement caching. 

abstract class AbstractCacheAlgo<K,V> implements ICacheAlgo{
    private chache = new Map<K,V>();
    private frequencyMap = new Map<K,number>();
    private isNotFull = ()=> this.capacity != this.chache.size;
}