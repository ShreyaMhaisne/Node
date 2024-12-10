let arr=[3,6,89,12,43,123];

let smallest=3;
for(let i=0;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log('smallest elemnt is ' + smallest);