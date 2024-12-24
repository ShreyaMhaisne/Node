const arr=[1,3,2,4,6,7,8];
let count=0;
let c=0
for(let i=0;i<arr.length;i++){
    if(i%2==0){
     console.log("the no is even "+arr[i]);
        count++;
        
    }
    else{
        console.log("the no is odd "+arr[i]);
        c++;
    }
}
console.log("count of even no is "+count);
console.log("count of odd no is "+c);