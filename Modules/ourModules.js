//Node js H.W. Hodaya Basher

//Ex-1
const findInArr =(arr,name)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==name)
            return true;
    }
    return false;
}
//Ex-2
const strToArray = (str) => {
    return str.split(" ")
}
//Ex-3
const maxSalary=()=>{
    let EmployeeArr=[
        {Name:"Nechami",Code:1,Salary:9000},
        {Name:"Yaffi",Code:2,Salary:8000},
        {Name:"Temmy",Code:3,Salary:7000}
    ]
    let max=0, employee;

    EmployeeArr.forEach(element => {
        if (element.Salary > max) {
            max = element.Salary
            employee = element.Name
        }
    });
    return "The employee with the highest salary is "+employee;
}


module.exports = { findInArr, strToArray, maxSalary }