let arr=[1,3,5,85,37,96,4,2];

function accending(){
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }  
    console.log(arr);
}
accending();
