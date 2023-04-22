var arr =[1,2,3,4,5,6,7];
console.log(arr)
for(var i =0;i<arr.length;i++) {
console.log(arr[i])
}
// for each loop
arr.forEach(function(element)  {
    console.log(element);
})

// while loop
let j=0;
while(j<arr.length){
    console.log(arr[j])
    j++;

}

// do  while loop
do
{
    console.log(arr[j]);
    j++;
    }while(j<arr.length);


// break 
var arr =[1,2,3,4,5,6,7];

for(var i =0;i<arr.length;i++) {
if(i==2) {
    break;
}
console.log(arr[i])
}

// continue
var arr =[1,2,3,4,5,6,7];
for(var i =0;i<arr.length;i++) {
    if(i==2){
        continue;
    }
console.log(arr[i])
}

