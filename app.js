let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let elemnt = 10;
for (let i = 0; i < arr.length; i++) {
    console.log('arr[i]'+ arr[i]);
    if (arr[i] == elemnt) {
        console.log('element found is ' + arr[i] + ' at index ' + i);
    }
}

