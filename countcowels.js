let arr = ['a', 'e', 'b', 'c', 'd', 'y', 'j', 'i'];
function vowel() {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == 'a' || arr[j] == 'e' || arr[j] == 'i' || arr[j] == 'o' || arr[j] == 'u') {
            console.log('vowels prsent ' + arr[j]);
            count++;
        }
    }
    console.log('total count of vowel is ' + count);

}
vowel();


