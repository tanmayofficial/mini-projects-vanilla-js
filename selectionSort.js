// sort the array = [4, 2, 6, 9, 1], using selection sort

const array = [4, 2, 6, 9, 1];

function swap(arr, min, i)
{
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}

function Sort(arr){
    for(let i=0; i<arr.length-1; i++) { 
        let minIdx = i;
        for(let j=i+1; j<arr.length; j++){
            if (arr[minIdx] > arr[j]){
                minIdx = j;
            }   
        }
        swap(arr, minIdx, i);
    }
    return arr;

}
console.log(Sort(array))
