//1)variable naming rules

//script variable define in index file 
console.log(script);

//variables define lower and using underscore
var firstname = 'ratan';
console.log(firstname);


//if define veriables value return on console true/false
var fullage = true;
console.log(fullage);

//without value just defining variable this is call undefined variable

var age;
console.log(log);

//without datatype define value variable

name = 'Vasita Ratan';
console.log(name);

//this type of datatypes breaking rules of javascript notation returning error unexpected this datatype
//remove error use underscore or remove back slash
var _5year = 3;
var forkwork = 'maintain';

//keywords can't use as variable name

var function = 'Ratan';

var delete = 'ratam';

var if = 'ratan';


//2)concetenate two variables

var firstname = 'ratan';
var age = 20;
console.log(firstname + ' ' + age);


//type coercion
var job,ismerried;
job = 'engineer';
ismerried = false;

console.log(firstname + 'is a'+ age + 'older' + job + 'merried or not' + ismerried);


//3)type mutaion

//alert showing the beautiful popup message

alert(firstname + 'is a'+ age + 'older' + job + 'merried or not' + ismerried);

//4)prompting the popup message 

var lastname = prompt(firstname + 'is a'+ lastname);


//5) Javascript basic operators

var years = 2018-10;
console.log(years);
 
//another way to define 

var year = 2020;
var ans  = year - 20;
var ans = year - 9;

console.log(ans);

var ans;
current = 2020;
var ratanage=20;
var meetage=22;

ans = current - 20;

//using arithmetic operator

console.log(current * 2);
console.log(current + 2);
console.log(current - 2);
console.log(current / 10);


//logical operator 
//ans returning in console true/false

var oldage = ratanage < meetage; 
console.log(oldage);

//typeof operator


console.log(typeof ratanage); // returning age in number 

console.log(typeof ismerried); //returing boolean value true/false


//undefine function
var none;

console.log(typeof none); 

//operator procedure

var now = 2018;
var yearage = 2000;
var fullage = 20;

var isfullage = now -fullage >= fullage;
console.log(isfullage);




