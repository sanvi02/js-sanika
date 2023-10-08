const accountId= "144545" //if value assigns once they cant be change
let accountEmail= "sanika@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // if value is not assigned to variable then it will show the undefined as output


//accountId = 2 //not allowed

accountEmail ="dghahgd@gmail.com"
accountPassword ="243672723673"
accountCity = "mumbai"


console.log(accountId); 

/* 
Prefer not to use var
Because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail,accountPassword,accountCity, accountState]);

