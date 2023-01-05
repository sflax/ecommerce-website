// First define interface ICacheAlgo with 3 methods: 

interface ICacheAlgo 

// getElement(K key) => (V or undefined) - Returns the value to which the specified key is mapped or undefined if this cache contains no mapping for the key 
// setElement(K key, V value) => (K or undefined) - Associates the specified value with the specified key in this cache. 
// If the key doesn’t exist - add the key-value entry to the cache according to the current algorithm. 
// If the key exists already - the result of evaluation should be equal to sequential execution of removeElement with this key and then setElement. If during the setElement function some key was removed - the removed key will be returned, otherwise undefined 
// removeElement(K key) => boolean - Removes the mapping for the specified key from this cache if present. If it was present - return true, otherwise false. 
