//Node js H.W. Hodaya Basher

//Ex-1
 const sumArray=(arr)=>{

    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
 }
 const sumValues = (arr) => {
    let array = []
    for (let i = 0; i < arr.length; i++)
        array[i] = sumArray(arr[i])
    return array
}
let array = [[5,5,5,5], [1,2,5], [20,5,8,2]]
console.log(sumValues(array));

//Ex-2
let person=[
{Name:"Hodaya",Id:"329658314",PhoneNumber:"0548517480"},
{Name:"Shira",Id:"329658311",PhoneNumber:"0559275425"},
{Name:"Tehilla",Id:"329658422",PhoneNumber:"0548527496"},
{Name:"Sara",Id:"329528314",PhoneNumber:"0533134251"},
{Name:"Rivka",Id:"212658314",PhoneNumber:"0548585980"}
]
for(let i=0;i<person.length;i++){
    console.log(person[i]);
}