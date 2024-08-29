 const accountId =144553
 let accountEmail = "dev@gmail.com"
 var accountPassword = "Dev@123"
 accountCity = "Kochi"


// accountId = 12 // this is not allowed

accountEmail ="me@gmail.com"
accountPassword ="567789"
accountCity = "Mumbai"//this  is possible but not preferable
let accountState;// the value will be undefined
// console.log(accountId)

/*
Prefer not to use var
because of the issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])