// find a number is palindrome number or not, n=123, n=43234
// 1. take the number in a temp var
// 2. find last digit = % the temp with 10
// 3. find the remainder by rem=rem*10/digit
// 4. divide the temp by 10 to remove the last digit
// 5. check whether the temp is equal to the num or not
// 6. if yes, print palindrome else not

function result(num){
    let temp=num, res=0, digit;
    while(temp !=0){
        digit = temp % 10; // 3  2  1
        res = res * 10 + digit; // (0*10)+3=3  3*10+2=32  32*10+1=321 
        temp = Math.floor(temp/10);// 12  1  0
    }
    
    if(res === num){
        return 'palindrome';
    }
    else return 'not a palindrome';
}
console.log(result(123));
console.log(result(43231));
