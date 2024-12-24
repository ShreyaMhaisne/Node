const arr=[6,4,3,1];
let temp=0;
for(let j=0;j<=arr.length-2;j++){
    for(let i=0;i<=arr.length-2;i++){
        if(arr[i]>arr[i+1]){
        temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
}
}

console.log(arr);
