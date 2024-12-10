let arr=['a','e','b','c','d','y','j','i','o','u'];
function vowel() {
    for(let j=0;j<arr.length;j++){
        if(arr[j]=='a' || arr[j]=='e' || arr[j]=='i' || arr[j]=='o' || arr[j]=='u'){
            console.log('vowels prsent '+ arr[j]);
            
        }
    }   
}

vowel();