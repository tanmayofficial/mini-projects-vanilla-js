//convert a number from decimal to binary. i/p: 7  o/p: 111  ,  i/p: 21  o/p: 10101

function decimalToBinary(num){
    let i=0, res=0, bit;
    while(num !=0){
        bit = num & 1;
        res = res + (bit * Math.pow(10, i));
        
        num = num >> 1;
        i++;
    }
    return res;
}
console.log(decimalToBinary(7));
console.log(decimalToBinary(21));

