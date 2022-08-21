//convert a number from binary to decimal. i/p: n=111 o/p 7  n=1010 = 10

function binaryToDecimal(num){
    let i=0, res=0, digit;
    while(num !=0){
        digit = num % 10; // 3  2  1
        
        if(digit === 1){
            res = res + Math.pow(2, i); //2^0, 2^1, 2^2, 2^3....2^n
        }
        
        num = Math.floor(num/10);
        i++;
    }
    return res;
}
console.log(binaryToDecimal(111));
console.log(binaryToDecimal(1010));

