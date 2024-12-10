let arr=[3,6,89,12,43,123];

let largest=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log('largest elemnt is '+largest);