// Task 1
// We need to create a variable - VAR. 
// After, we need to assign it the name "bob"

var customerName = "bob"
const leastFavoriteCustomer = "cindy"


// Task 2
// We need to create a function called upperCaseCustomerName()
// After, that function needs to be able to access the customerName varible 

function upperCaseCustomerName(){
    return customerName = "BOB"
}

// Task 3
// We need to create a function called setBestCustomer()
// After, we need to decalre a variable called bestCustomer - called "not bob"
    // As stated within the notes - it is best not declare global variables within a function
    // Please note that declaring global variables inside functions is generally not recommended in most programming practices 
    // because it can lead to unexpected side effects and make your code harder to maintain. It's better to use local variables 
    // and pass data between functions using parameters and return values whenever possible.

function setBestCustomer(){
    bestCustomer = "not bob"
 }

 // Task 4
// We need to create a function called overwriteBestCustomer()
// After, we need to decalre that bestCustomer now equals "maybe bob"

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}

// Task 5
// Assign a global constant (const) - leastFavoriteCustomer to equal "cindy"
// After, create a function called changeLeastFavoriteCustomer - assign the function an argument - in our case newCustomer
// After, declare leastFavoriteCustomer to equal newCustomer

// After declare the function changeLeastFavoriteCustomer to equal, in our case, "carol" 

function changeLeastFavoriteCustomer(newCustomer){
   leastFavoriteCustomer = newCustomer; 
}