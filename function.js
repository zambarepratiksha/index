
// dry principle =do not repeat yourself

function avg(a,b){
     c=(a+b)/2;
     return c;
    }
c1=avg(4,6);
c2 =avg(14,16);
console.log(c1,c2);
console.log(3)
console.log('1223456')


// conditional in javascript 
// single if statement
var age =34;
if(age >18){
    console.log('you can drink a water')
}

// if-else statement
if(age >18){
    console.log('you can drink a water')
}
else {
    console.log('you not drink a water') 
}

//if=-else ladder
age =31;
if(age >32){
    console.log('you are not a kid')
}
else if(age >26) {
    console.log('bachhe nhi rahe') 
}
else if(age >22) {
    console.log('yes bachhe nhi rahe') 
}
else if(age >18) {
    console.log('18 bachhe nhi rahe') 
}
else {
    console.log("bachhe rahe")
}
console.log("end of ladder")
