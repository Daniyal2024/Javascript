//       Arithmatic Operator
//         //Using + Operator
//         {       let a = 10;
//         let b = 5;
//         let c=a+b;
//         console.log("a+b=", c);
// }
// // Using - Operator
// {
//         let a = 10;
//         let b = 5;
//         console.log("a-b=", a-b);
// }
// //Using * Operator
// {
//         let a = 10;
//         let b = 5;
//         console.log("a*b=", a*b);
// }
// // Using / Operator
// {
//         let a = 5;
//         let b = 2;
//         console.log("a/b=", a/b);
// }
// // Using % Operator
// {
//         let a = 5;
//         let b = 2;
//         console.log("a%b=", a%b);
// }
// //Using ** Operator
// {
//         let a = 5;
//         let b = 2;
//         console.log("a**b=", a**b); //25
// }
// //Using ** Operator
// {
//         let a = 6;
//         let b = 6;
//         console.log("a**b=", a**b); //46656
// }
// // Unary Operator
// {
//         let a = 5;
//         let b = 10;
//         a =a+1;
//         console.log("a =", a);
// }
// // Unary Operator
// {
//         let a = 5;
//         let b = 10;
//         a =a-1;
//         console.log("a =", a);
// }
// // Unary Operator
// {
//         let a = 5;
//         let b = 10;
//         a++;
//         console.log("a =", a);
// }
// // Unary Operator
// {
//         let a = 5;
//         let b = 10;
//         a--;
//         console.log("a =", a);
// }
// // Unary Operator
// //Post Inc
// {
//         let a = 5;
//         let b = 10;
//         b++;
//         console.log("b =", b);
// }
// // Pre Inc
// {
//         let a = 5;
//         let b = 10;
//         ++b;
//         console.log("++b =", b);
// }
// //Post Inc
// {
//         let a = 5;
//         let b = 10;
//         console.log("b++ =", b++);//First One B Ki Value Print Ho Gi phir.
//         console.log("b++ =", b++);//Sencond one B ki Value Me Inc Ho Ga 

// }
// Assignment Operator
// // +=
// {
//     let a=24;
//     let b=32;
//     a +=4;
//     console.log("a+=4",a)//28
// }
// //-=
// {
//     let a=24;
//     let b=18;
//     b -=4;
//     console.log("-=4",b)//14
// }
// //-=
// {
//     let a=10;
//     let b=15;
//     a -=4;
//     console.log("-=4",a)//6
// }
// //+=
// {
//     let a=10;
//     let b=15;
//     a +=4;
//     console.log("+=4",a)//14
// }
// //*=
// {
//     let a=10;
//     let b=15;
//     a *=4;
//     console.log("*=4",a)//40
// }
// //%=
// {
//     let a=50;
//     let b=15;
//     a %=3;
//     console.log("%=3",a)//2
// }
// //**= 
// {
//     let a=6;
//     let b=15;
//     a **=6;
//     console.log("**=",a)//46656
// }
// Comparsion Operator
// Equal To ==
// {
//     let a=5;
//     let b=6;
//     console.log("5==6",a==b);//Boolean Value Result mil ga //False
// }
// //Equal To ==
// {
//     let a=5;
//     let b=5;
//     console.log("5==5",a==b);//Boolean me result mil ga  //True
// }
// //Not Equal To
// {
//     let a=5;
//     let b=5;
//     console.log("5!=5",a!=b);//Boolean me result mil ga  //False
// }
// //Not Equal To
// {
//     let a=5;
//     let b=6;
//     console.log("5!=6",a!=b);//Boolean me result mil ga  //True

// }
// // Comparison Opeator

// {
//     let a=5;//Number
//     let b= "5";//String -> Number //Comparsion Opeator Pehele Sring ko number me change kar ga phir comp kare ga 
//     console.log("a==b",a==b);
// }
// //Equal To add Type
// {
//     let a=5;
//     let b="5";
//     console.log("a===b",a===b);    
// }
// //Not Equal To and tpye
// {
//     let a=5;
//     let b=5;
//     console.log("a!==b",a!==b);
// } 
// //> Greater Than 
// {
//     let a =11;
//     let b =12;
//     console.log("a > b" ,a > b );//>is sign ka matlab grater than hota hai 
// }
// //>=
// {
//     let a =5;
//     let b =6;
//     console.log("a >= b" ,a >= b ); 
// }
// Logical Operator 
// && Operator
// {
//     let a=10;
//     let b=9;
//     let con1=a>b;
//     let con2=a==10;
//     console.log("a>b && a==10",con1&&con2);

// }
// //&& Operator
// {
//     let a=7;
//     let b=9;
//     let val1 = a<b;
//     let val2 = a==7;
//     console.log("a>b && a===7",val1&&val2);
    
// }
// {
//     let a=7;
//     let b=9;
//     let val1 = a<b;
//     let val2 = a!=8;
//     console.log("a>b && a!=8",val1&&val2);
    
// }
// || Operator
// {
//     let a = 16;
//     let b = 12;

//     console.log("a > b a !b", a > b || a!=b);
// }
// //a!=b Example 
// {
//     let a= 14;
//     let b=a;
//     console.log("a!=b",a!=b)
// }
// //a>b Example
// {
//     let a = 16;
//     let b = 12;

//     console.log("a > b ", a > b);
// }
// {
//     let a = 16;
//     let b = 12;
//     console.log("!(a>b)",!(a>b));
// }
// Conditional Statment
// Ligth Theme Or Dark Theme//If Statment
// {
//     var mode="dark"
//     var color;

//     if (mode==="dark"){
//         color="dark"
//     }
//     if (mode==="ligth"){
//         color="white"
//     }
//     console.log(color)
// }
// ///Ligth Theme Or Dark Theme//Else Statment
// {
//     var mode="kuch bhi"
//     var color;

//     if (mode==="dark"){
//         color="dark"
//     }
//     else{
//         color="white"
//     }
//     console.log(color)
// }
// //Example:-2
// //Vote For 18+
// {
//     var age=19;

//     if (age >=18){
//         console.log("U Can Vote")
//     }
//     else{
//         console.log("U Can Not Vote")        
//     }
// }
// {
//     var age=19;

//     if (age <=18){
//         console.log("U Can Vote")
//     }
//     else{
//         console.log("U Can Not Vote")        
//     }
// }
// //a > jo hai b se bara hai jo ke sahi statment hai 
// {
//     let a = 5;
//     let b=4;
//     console.log(a>b);
// }
// //a jo hai b se chota hai jo ke galat statment hai 
// {
//     let a = 5;
//     let b=4;
//     console.log(a<b);
// }
// Example of If Or Else 
// {
//     let a;

//     a=prompt("Enter You Age For Ride");

//     if(a>=18){  
//         alert("You Can Go For The Ride")
//     }
//     else{
//         alert("You Are  Not Eligale For The Ride")
//     }
// }
// {
//     //Even Or Odd Number Condition
//     let a=9;

//     if (a % 2 ===0){
//         console.log("Even")
//     }
//     else{
//         console.log("Odd")
//     }
// }
// {
//     let num;
//     num=prompt("Enter The Number To Check To Even OR Odd Cond");
//     if(num%2===0){
//         alert( "This Is Even Number")
//     } 
//     else{
//         alert("This Is Odd Number")
//     }
// }
// Syntax ->Rules of Programming
// {
//     let age;
//     age=prompt("Please Enter The Age For CNIC")
//     if(age>=18){
//         alert("Ap Ka CNIC Ban Sakta Hai")
//     } 
//     else if(age>=25){
//         alert("Ap Ka CNIC ban Hoa Hai ")
//     }
//     else if(age>=35){
//         alert("Ap Apna CNIC Update Kar Sakte Hai")
//     }
//     else if(age>=45){
//         alert("AP Ko Bhi Bol Na Pare Ga Kia Bhai?")
//     }
//     else if(age<=18){
//         alert("ap Ka abhi bhot Time hai CNIC ")
//     }
//     else{
//         alert("Please Enter A Valid Age ")
//     }
// }
// {
//     let age;
//     age=prompt("Please Enter The Age For The Dis")
//     if(age>=18){
//         alert("Ap Ko 35% Dis Mile ga")
//     } 
//     else if(age>=25){
//         alert("Ap Ko 25% Dis Mile ga ")
//     }
//     else if(age>=35){
//         alert("Ap Ko 20% Dis Mile ga")
//     }
//     else if(age>=45){
//         alert("Ap Ko 5% Dis Mile ga")
//     }
//     else if(age<=18){
//         alert("ap ko dis nhi mil ga")
//     }
//     else{
//         alert("Please Enter A Valid Age ")
//     }
// }
// Teranry Oprator
// {
//     let age=25;

//    let result = age >18?"adult":"not adult";
//     console.log(result)
// }
// {
//     let age=17;
//     age>18?console.log("adult"):console.log("not adult");
// }
// {
//     let age;
//     age=prompt("Enter Your Age")

//     if (age>=18){
//         alert("adult")
//     }
//     else{
//         alert("not adult")
//     }
// }

// }
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
//Loop In JavaScrip Chapter#3
// {
//     for(var count =1; count <=5;count++){
//         console.log("Apna College");
//     }
//     console.log("Loop Khatam Ho Gaya Hai ")
// }
//Calulation Of 1+2+3+4+5
// {
//     let sum=0;
//     for (let i=1; i<=5;i++){
//         sum =sum +i;
//     }
//     console.log("sum =" ,sum)
// }
// //Example
// {
//     let sum =0;
//     for (let i=2; i<=5; i++){
//         sum=sum+i;
//     }
//     console.log("sum = "+sum);
// }
// for (var i = 0; i <= 5; i++) {
//     let Fullname = "Daniyal";
//     console.log("Hi, my name is " , Fullname);
// }
//Print 1 to 5
// {
//     for(let i=1;i<=5;i++){
//         console.log(i)
//     }
// } 
//While Loop 
// let i=20;
// while(i<=5){
//     console.log(i);
//     i++
// }
// {
// let i=1;
// while(i<=5){
//     console.log("This is While Loop "+i);
//     i++
// }
// }
// //Do While Loop 
// {
//     let i=1;
//     do{
//         console.log("This Is Do While Loop "+i);
//         i++
//     }while(i<=5);
// }
// {
//     let i=20;
//     do{
//         console.log("This Is Do While Loop Wrong Condition But Print 1 Time. "+i);
//         i++
//     }while(i<=5);
// }
//For Of Loop 
// {
//     let str="Success IS Waiting For You";
//     //Iterator Character
//     for(i of str){
//         console.log("i=",i);

//     }
// }
//Example of Containg Number Of Word In Hello 
// {
//     let str ="Hello";
//     let size=1;
//     for (i of str){
//         console.log(" ="+size)
//         size++
//     }
// }

//For In Loop
// {
//     let student={
//         fullName:"Daniyal",
//         class:"12 Fail",
//         ispass:false,
//         percentage:"30%"
//     }
//     for (let key in student){
//         console.log(key);
//     }
// }
// {
//     let student={
//         fullName:"Manoj Kumar",
//         class:"12 Fail",
//         ispass: "True",
//         per:"30%"
//     }
//     for (let key in student){
//         console.log(key,student[key]);//We Add Is To Written Key Value Like This objName[Var ka Naam key] 
//     }
// }
//Practice Ques In Promt
//Even odd Condition Using If Else
// {
//     let num;
//     num=prompt("Enter The Value To Check Your Value  Even or Not ")
//     if(num%2===0){
//         alert("Your Value Is Even Num  "+num);
//     }
//     else{
//         alert("Your Value Is Odd Num  ")
//     }
// }
// //Practice Ques In Console Window
// {
//     for (let num=0;num<=100;num++){
//         if(num%2===0){
//             //even number
//             console.log(num);
//         }
//             else{
                
//             }
        
//     }
// }

//     let str ="Daniyal";
//     console.log(str[0])
// let str2=`No One Can Change Your liFe `
//Templete Literals // wo hai jo ``se create karte hai 
// let student={   
//     FullName:"Daniyal",
//     Class:12,
//     IsPass:"True"
// }
// console.log("The Name Of Student Is "+student.FullName+" The Class Of Student Is "+student.Class)//Normal Way of written by string

// console.log(`The Name Of Student Is ${student.FullName} The Class Of Student Is ${student.Class}`)//Temlate Literals


// console.log("Daniyal\nJavadia");//For Line Break In Sting//For Next Line//String Character /t Ek Hi Count Ho Ga 
// console.log("Daniyal\t\tJavadia");//For Tab Space
// let bio="Daniyal"
// console.log("The Result Of Bio =  " +bio)
//String Method In JS
// {
// let str="daniyal";
// str.toUpperCase();
// let newOne=str.toUpperCase();

// console.log("Orginal Value Of String  "+str);
// console.log("New One Value Of String  "+newOne);
// }
// {
// let str="daniyal";
// str.toUpperCase();   
// str=str.toUpperCase();
// console.log(str);
// }

    // let newOne="DANIYAL";
    // console.log(newOne);        
//Trim 
// let abc="     Daniyal   Javadia    ";//Trim Method sataring Or End Ka Space Khatam Karta hai middle ka nhi karta 
// console.log(abc);

//Slice Method 
// let xyz="Daniyal";
// console.log(xyz.slice(2,5))
//Concat Mehod In JavaScript//2 Method of join 2 string is + 
// let str1="Daniyal ";
// let str2="Javadia";
// let res=str1.concat(str2);
// console.log(res);
//Replace Method 
// let xyz ="Daniyal";
// console.log(xyz.replace("an","123"));//And This Is Replace is One Time 
//Replace All 
// let xyz="Daniyal";
// console.log(xyz.replaceAll("a","69"));//This Is Replace all Time Written a For Example Daniyal a a
//Charter Idx
// let xyz="Daniyal";
// console.log(xyz.charAt("4"));//y For Finding The Index OF Character
// Chapter#4 Arrays

//object 
// let carMOdel={//This Is 
//     car1:"revo",
//     car2:"Tundra",
//     car3:"Camry",
//     car4:"Crwon",
// }
// console.log(carMOdel);
//Arrays
// let car =["revo","tundra","camry","crown"];//This Is Array

// car[3] ="Mehran Boss"//New Value Assign To Arry Value of the index 3
// //For Loop 
// for (let i=0; i<car.length; i++){
//     console.log(car[i]);
// }
// for (let i=0; i< car .length; i++){
//     console.log(car[i]);
// }
//Example Of Loop for Revision
// for (var i=0;i<3;i++){
//     let name="Daniyal";
//     console.log("Hi My Name Is "+ name)
// };
//Example Made By Daniyal
// for (let i=0; i<car.length;i++){
//     console.log(car[i])
// }
//
// {
//     //Example #2//For Of Loop 
//     let cities =["karachi","lahore","islambad"];
//     for (let city of cities){
//         console.log(city.toLocaleUpperCase())
//     }
// }
// let marks=["23","33","56","12","75"]
// //Looping Over ARRAYS
// let Cars=["crown","Revo","Tundra","Mehran","City","Civic"];

// for (let i=0; i<Cars.length;i++){
//     console.log(Cars[i]);
// }

// let value="sorry";

// for (let i=0;i<10;i++){
//     console.log(value)
// }
// let soory="i am soory"

// for (let i=0;i<5;i++){
//     console.log(soory)
// } 
// let cars=["camry","revo","tundra","civic","Mira"];

// console.log(cars)
// console.log(cars.toString())



// let PakistaniYoutubers=["DuckyBhai","MrJayPlays","Talha Anjum","Talha Yunus"];
// let IndianYoutubers=["Carry","Bhuvan","BYouNick"];
// let YoutubeChannel=["TSeries","UrduPoint","P4Pako"]
// let Youtubers=PakistaniYoutubers.concat(IndianYoutubers , YoutubeChannel);

// console.log(Youtubers);
// let cities=["Karachi","Lahore","Hyderabad","Islamabad"];
// for (let city of cities){
//     console.log(city.toLocaleUpperCase())
// }
//Loop Sum
// let MarksStudent=[54,47,76,32,97,98];
// let sum =0;
// for (let Value1 of MarksStudent){
//        let total= sum +=Value1    
//     }
//     console.log(sum)
//     let avgMarks = sum/MarksStudent.length;
//     console.log(avgMarks)
//Practice Question
// let MarksStudent=[32,65,76,87,99,53];
// let sum =0;
// for (Value1 of MarksStudent){
//     sum += Value1;
// }
// console.log(sum);
// let AvgMarks=sum/MarksStudent.length;
// console.log(AvgMarks)
//Example Or Practice Question
let item =[250,640,300,800,70];
//For Loop
for (let val1 of item)
{

    var discount = val1/10
    //Assign New Value To Variable
    var NewVlaue=val1;
    //Dis Minus From Item Value1 
    let disPrice=NewVlaue-=discount
    //Print Value 
    console.log(val1,"10 Per Dis",discount,"After Dis Price",disPrice)
}
