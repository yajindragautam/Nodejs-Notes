const age = 25;
if (age <= 20) {
  console.log("You are in teen age");
} else if (age > 20 && age <= 29) {
  console.log("You are in your twenty's");
} else {
  console.log("You are in old age");
}

// SWITCH EXAMPLE
let day = "sunday";
switch (day) {
  case "monday":
    console.log("It 's monday");
    break;
  case "sunday":
    console.log("It 's sunday");
    break;
  case "tuesday":
    console.log("It 's tuesday");
    break;

    default:
        console.log('Invalid Input');
}


let counter = 0;
while(counter < 10){
   // console.log('Counting ' + counter);
    counter++;
}

let date = new Date();
console.log('Today Day :' + date.getDay());
console.log('Today Hours :' + date.getHours());
console.log('Today Minutes :' + date.getMinutes());
