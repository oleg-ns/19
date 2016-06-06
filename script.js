var student = "Oleg";
console.log(student);
student = "Oleg Gubarev";
console.log(student);

var name = prompt("Enter your name")
alert("Welcome, " + name);

confirm("do you really want yo download thus page?");

var r = "9" + 0; // строка, 90
var r = 9 + "0"; //строка, 90
var r = 4 + 9; //число, 13
var r = null + 7; //число, 7
var r = "6" + null; //строка, 6null

console.log("9" + 9);

"4" == 4 //сравнение значений, тип данных не важен. ответ true
"4" === 4 ////сравнение значений, и типа данных. ответ false

2/3 + 1 + 1/3 == 2 //нет, потому, что js, как и другие языки программирования, имеет отклонения от стандартных математических вычислений

var obj = {},
    r = 0;
obj.prop = 9;
r = obj.prop;
delete obj.prop;
console.log(obj.prop, r); // в консоль будет выведено 9

