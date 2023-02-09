
// document.getElementById("bluee").addEventListener("mouseover",function(){
//     document.getElementById("bluee").style.backgroundColor="red"});




// let n=6;
// for (let i=0; i<n; i++){
//     for(let j=0; j<i; j++){
//         String = String + `*`;
//     }
//     String = String + "\n";
// }
// console.log(String);


// let n=6;
// for (let i=0; i<n; i++){
//     for(let j=0; j<n-i; j++){
//         String = String + `*`;
//     }
//     String = String + "\n";
// }
// console.log(String);

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);




//--------------VARIABLE--------------
// let name = 'Dinesh';
// console.log(name);


//--------------CONT--------------
// cont interest = 3;
// let calc = interest * 5;
// console.log(calc);


//--------------OBJECT--------------
// let person ={
//     name: 'Dinesh',
//     age: 27
// }
// person.name = 'Varun'
// console.log (person)


//--------------ARRAY--------------
// let selectedColors = ['red' , 'blue'];
// selectedColors[2] = 5;
// console.log(selectedColors);


//--------------FUNCTION--------------
// function green(name, lastname){
//     alert('hello ' + name + lastname)
// }
// green('John ', 'smith ');
// green('danny');


// function calc(num){
// return num*num
// }
// alert(calc(4));



//--------------Excersise--------------

// let x = 2;
// console.log(x <= 1)

// alert('1' == 1)

// let runs = 90;
// let batsman = runs <= 50 ? 'half century' : 'century';
// alert(batsman);





//---------- if else if loop ---------------

// let hours = 12;

// if (hours >=6 && hours < 12){
//     alert ('Good Morning');
// }
// else if (hours >=12 && hours < 18){
//     alert ('Good afternoon');
// }
// else{
//     alert ('Good night');
// }




//---------- for loop ---------------

// for (let i = 10; i>=0; i--){
//     if (i % 2 ==0) alert( `Even numbers ${i}`);
// }




//---------- while loop ---------------

// let i = 0;
// while (i <= 6) {
//     alert('hi ' + i);
//     i++;
// }



//---------- do while loop ---------------

// let i = 0;
// do {
//         if (i % 2 ==0) alert(i);
//     i++;
// } while(i <= 5);
// alert('bye')





//---------- while loop ---------------

// let i = 0;
// while(i<5){
//     console.log(i);
// }




//---------- for in loop ---------------

// let person = {
//     name: 'dinesh',
//     age: 26
// }
// let man = {
//     col: 'varun',
//     no: 24
// }
// for (let key in person)
// alert(key, person[key]);




//---------- for of loop ---------------

// const colors = ['red', 'gree', 'blue'];
// for (let col of colors);
// console.log(colors);






//---------- Excersise ---------------

//  let a = 20;
//  let b = 10;

//  if (a > b){
//      alert(' A is larger than B');
//  }
//  else{
//      alert(' B is larger than A');
//  }



//---------- Excersise---------------

// function max(a,b){
//     return (a > b) ? a : b;
// }
// alert(max(5,6));


//---------- Excersise---------------

// function image (width, height) {
//     return (width > height);
// }
// alert(image(300,400));




//----------FizzBuzz Excersise---------------

// function fizzBuzz(input) {
//     if (typeof input !== 'string')
//         return NaN;
//     if (input % 3 == 0 && input % 5 == 0)
//         return 'FizzBuzz';
//     if (input % 3 == 0)
//         return 'Fizz';
//     if (input % 5 == 0)
//         return 'Buzz';
//     else
//         return input;
// }
// alert(fizzBuzz(ad));




//----------Speed Excersise---------------

// function checkspeed(speed){
//     const speedLimit = 70;
//     const keypoint = 5;

//     if (speed < speedLimit + keypoint){
//         alert('ok');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / keypoint)
//     if(points >= 12)
//         console.log('Licence Suspended');
//     else
//         console.log('Points:', points);
// }

// checkspeed(80);



//------------- ODD EVEN Excersise --------------

// function showNumbers(limit){
//     for(let i = 0; i <= limit; i++){
//         console.log( i % 2 == 0 ? i + ' Even' : i + ' Odd' )
//     }
// }
// showNumbers(20);



//------------- GRADE CALCULATOR --------------

// const marks = [80, 80, 50]

// console.log(calculateGrade(marks));

// function calculateGrade(marks){

//     let sum = 0;
//     for(let mar of marks)
//     sum += mar;
//     let avg = sum / marks.length;

//     if (avg>=1 && avg <= 59){
//         console.log('F');
//     }
//     if (avg>=60 && avg <= 69){
//         console.log('D');
//     }
//     if (avg>=70 && avg <= 79){
//         console.log('C');
//     }
//     if (avg>=80 && avg <= 89){
//         console.log('B');
//     }
//     if (avg>=90 && avg <= 100)
//         console.log('A');
// }


//------------- STARs --------------

// showStars (5);

// function showStars(rows){
//     for (let row = 1; row <= rows; row++ ){
//         let pattern = '';
//         for (let i = 0; i < row; i++ )
//         pattern += '*'
//             console.log( pattern)
//     }
// }




//------------- PRIME NUMBERS --------------



// showPrimes(10);

// function showPrimes(limit){
//     for(let i = 1; i <= limit; i++)
//     for(let j = 1; j < i; j++){
//         if(i%j === 0){
//             console.log(limit);
//         }
//     }
// }




//------------- ADRESS OBJECT --------------

// let address = {
//     street : 'Chembur',
//     city: 'Mumbai',
//     zipCode: 400088
// };

// function showAddress (address){
//     for (let key in address)
//     console.log(key, address[key]);
// }
//  showAddress(address);






//------------- FACTORY FUNCTION ADRESS OBJECT --------------

// function address (street, city, zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     };
// }
// console.log('chembur', 'mumbai', 400088);

// console.log('chemb', 'mumb', 4088);







//------------- CONSTRUCTOR FUNCTION ADRESS OBJECT --------------

// function Address (street, city, zipCode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }
// let addres = new Address('chembur', 'mumbai', 400088);
// console.log(addres);





//------------- OBJECT EQUALITY --------------

// function Address (street, city, zipCode){
//         this.street = street;
//         this.city = city;
//         this.zipCode = zipCode;
//         }
    
// function areEqual(addres1, addres2){
//     return addres1.street === addres2.street &&
//     addres1.city === addres2.city &&
//     addres1.zipCode === addres2.zipCode;
// }
//     let addres1 = new Address('chembur', 'mumbai', 400088);
//     let addres2 = new Address('chembur', 'mumbai', 400088);
//     console.log(areEqual(addres1, addres2));







//------------- BLOG POST OBJECT --------------

// let blogPost = {
//     title    : 'a',
//     body     : 'b',
//     author   : 'c',
//     views    : 8,
//     comments : [
//         {author : 'a', body   : 'b'},
//         {author : 'e', body   : 'h'}
//     ],
//     isLive   : true,
// }
// console.log(blogPost);





//------------- BLOG POST CONSTRUCTOR OBJECT --------------

// function BlogPost (title, body, author){
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0 ;
//     this.comments = [];
// }
// let post = new BlogPost('title', 'body', 'author')
// console.log(post)






//---------------- ARRAY FROM RANGE -------------------

// const numbers = arrayFromRange(1,20);

// function arrayFromRange(min, max){
//     const output = [];
//     for(let i=min; i <= max; i++)
//     output.push(i);
//     return output;
// }

// console.log(numbers);





//---------------- REPLACING INCLUDES FUNCTION -------------------

// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, -1));

// function includes (array, searchElement){
//     for(let element of array)  
//         if (element === searchElement)
//             return true;
//     return false;
// }







//---------------- REPLACING EXCEPT FUNCTION -------------------

// const numbers = [1, 2, 3, 4];

// console.log(except (numbers, 2))

// function except (array, exclude) {
//     for (let element of array)
//     if (element === exclude){
//         element.filter(array)
//     }
// }


// ---------------- MAGIC EIGHT BALL (FORTUNE TELLER) -------------

// let userName = "Dinesh";
// userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");
// let userQuestion = "Lets Check Your Fortune 😁";
// console.log(userQuestion);
// let randomNumber = Math.floor(Math.random()*8);
// console.log(`Numer is ${randomNumber}`);
// let eightBall = randomNumber;
// switch(eightBall) {
//   case 0:
//     console.log("It is certain")
//     break;
//   case 1:
//     console.log("It is decidedly so")
//     break;
//   case 2:
//     console.log("Reply hazy try again")
//     break;
//   case 3:
//     console.log("Yes - definitely")
//     break;
//   case 4:
//     console.log("Count on it")
//     break;
//   case 5:
//     console.log("My sources say no")
//     break;
//   case 6:
//     console.log("Concentrate and ask again")
//     break;
//   default:
//      console.log("Signs point to yes")
// }

// console.log("\n HINT! \n Keep trying until you are Satisfied 😅")
