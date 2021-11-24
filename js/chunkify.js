const chunkify = (inputArray, perChunk) => {
  let newArray = [];
  let i = 0;

  /*while (i < n.length) {
    newArray.push(n.slice(i, (i += p)));
  }*/

  for (let i = 0; i < inputArray.length; ) {
    newArray.push(inputArray.slice(i, (i += perChunk)));
  }

  return newArray;
};

console.log("----------------------------");
console.log("Chunks de 1 items", chunkify([1, 2, 3, 4], 1));
console.log("----------------------------");
console.log("Chunks de 2 items", chunkify([1, 2, 3, 4, 5, 6, 7], 2));
console.log("----------------------------");
console.log("Chunks de 3 items", chunkify([1, 2, 3, 4, 5, 6, 7], 3));
console.log("----------------------------");
console.log("Chunks de 4 items", chunkify([1, 2, 3], 4));
