// Write your solution in this fill
const employee = {}
employee.name = "Desh"
employee.streetAddress = "Climbing Fern"

//employee

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]:value}
}

//creates an object clone and adds an key:value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value
     return employee
}

//delete a key from an object and save a clone
function deleteFromEmployeeByKey(employee, key){
    let clone = {...employee}
    delete clone[key];
    return clone
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}



//updateEmployeeWithKeyAndValue(employee, "score", 100)
//destructivelyUpdateEmployeeWithKeyAndValue(employee, "score", 100)
deleteFromEmployeeByKey(employee, "name")  