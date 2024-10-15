function sortAndPrintArray() {
    
    let arr = [6, 3, 20, 10, 2];

    console.log("Original array:", arr);

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log("Sorted array:", arr);

    console.log("First element:", arr[0]);
}

sortAndPrintArray();