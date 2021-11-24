const chunkify = (inputArray, perChunk) => {};

console.log("----------------------------");
console.log("----------------------------");
console.log("Chunks de 1 items", chunkify([1, 2, 3, 4], 1));
console.log("----------------------------");
console.log("Chunks de 2 items", chunkify([1, 2, 3, 4, 5, 6, 7], 2));
console.log("----------------------------");
console.log("Chunks de 3 items", chunkify([1, 2, 3, 4, 5, 6, 7], 3));
console.log("----------------------------");
console.log("Chunks de 4 items", chunkify([1, 2, 3], 4));
