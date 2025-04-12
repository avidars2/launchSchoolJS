let arr = [1, 2, 3, 4, 5]
let target = arr.length
let arraySegments = [];
for (let element = 0; element < target; element++) {
    let currentSegments = [];
    for (let innerSeg = element; innerSeg < target; innerSeg++) {
        currentSegments.push(arr.slice(element, innerSeg + 1));
    }
    currentSegments.forEach(array => arraySegments.push(array));
}

console.log(arraySegments);
