
/*
for (let j = 1 ; j<=10; j++)
    console.log("THese are Numbers " + (2*j)) 
/*
let k = 2
while (k <= 10){

    console.log("This is the table of two "+ (2*k))
    k++
}*/

/*
for (let i = 1 ; i<=10; i++){
    console.log("2 x " + i + "="   +(2 * i));
}*/

/*
let i = 1
while (i <=10){
    console.log("2 x " +i)
    i++
}*/
/*
let i = 5
do{
    console.log(i)
    i--
}

while(i>=1)*/
/*
for(let i = 5; i>=0; i--) 
    console.log(i)*/
/*
let i = 5
while(i>=0){
    console.log(i)
    i--}
    */
/*
    let toybox = {
        car: "redcar",
    doll: "barbiedoll",
    ball: "football"
    }

    for(let item in toybox){
        console.log(item)
        console.log(toybox[item]);
    }
        */
      /* "use strict";

       let student = {
        name: "Hassan",
         city: "Karachi",
    country: "Pakistan",
    grade: "A",
    rollNo: 102,
    school: "Beaconhouse",
    section: "Blue",
    phone: "0300-1234567",
    email: "hassan@gmail.com"
       }
       for ( let key in student)
       { console.log(key + ":" + student[key])

       }
       */

/*
"use strict";

let students = [
    { name: "Hassan", age: 18, city: "Karachi" },
    { name: "Ali", age: 20, city: "Lahore" },
    { name: "Ahmed", age: 19, city: "Islamabad" }
];

for(let i = 0 ; i<students.length; i++) {
    console.log("Students" + (i+1)+ ":" +students[i].name +"," + students[i].age + "," + students[i].city)
}
    */
   "use strict";

let students = [
    { name: "Hassan", age: 18, city: "Karachi" },
    { name: "Ali", age: 20, city: "Lahore" },
    { name: "Ahmed", age: 19, city: "Islamabad" }
];
for ( let i = 0 ; i < students.length ; i++){
    let student = students[i]

    console.log("Students" + (i+1)+ ":");

    for (let key in student){
        console.log(" " + key + ":" + student[key])
}
console.log("-------------")

}