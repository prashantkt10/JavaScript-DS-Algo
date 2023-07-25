function radixSort(arr) {
    const window = Array.from({ length: 10 }, () => []);
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = String(arr[i]);
        if (currentNum.length > maxLength) {
            maxLength = currentNum.length;
            continue;
        }
    }

    let sortedArray = structuredClone(arr);

    let letterLocation = 1;

    while (maxLength > 0) {

        for (let i = 0; i < sortedArray.length; i++) {
            let currentNum = String(sortedArray[i]);
            let windowLocation = Number(currentNum[currentNum.length - letterLocation]) || 0;
            window[windowLocation].push(currentNum);
        }

        sortedArray = [];

        for (let i = 0; i < window.length; i++) {
            sortedArray = [...sortedArray, ...window[i]];
            window[i] = [];
        }

        letterLocation += 1;
        maxLength -= 1;
    }

    return sortedArray;
}

console.log(radixSort([123, 1234, 67589, 532, 9999, 654]));
