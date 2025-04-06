function transpose(matrix) {
    /**
     * {0: [], 1: [], 2: []}
     */
    let matrixObj = matrix.reduce((acc, arr) => {
        arr.forEach((num, idx) => {
            (acc[idx] = acc[idx] || []).push(num)
        });
        return acc;
    }, []);

    console.log(matrixObj);
    return matrixObj;
}


transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]
transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
