//filter means it print wht we want as per condition
// filter madhe je true aste tech print hote
// filter condition nusar prinnt karte
let arr=[1,2,3,4,4];
let p=arr.filter((value)=>{
    if(value>1){
        return true;
    }
    else{
        return false;
    }
})
console.log(p); // it will print only true conditions not print falsee (means false condition will not execute)