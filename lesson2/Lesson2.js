

// task1
//Почему код даёт именно такие результаты?

console.log("************задание_1************")

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2

console.log("++a - префиксный инкремент, сначала переменная \"а\" увеличивается на 1, потом результат выводится в alert");

d = b++; alert(d);           // 1
console.log("b++ - постфиксный инкремент, сначала выводится в alert старое значение переменной \"b\", а потом увеличивается на 1");

c = (2+ ++a); alert(c);      // 5
console.log("Значение переменной \"а\" = 2. Икремент префиксный, значит, перед выводом alert работает формула 2 + (1+2) = 5");

d = (2+ b++); alert(d);      // 4
console.log("Значение переменной \"b\" = 2. Икремент постфиксный, значит, перед выводом alert работает формула 2 + (2) = 4, после чего \"b\" инкерментируется");

alert(a);                    // 3
console.log("Переменная \"а\" не изменяется после последнего преобразования и равно 3");

alert(b);                    // 3             
console.log("После последнего постфиксного преобразования переменная \"b\" также не меняется и равно 3");

// task 2 
//Чему будет равен x в примере ниже?

console.log("************задание_2************");

a = 2;
console.log("Переменной \"а\" присвоено значение 2");
var x = 1 + (a *= 2); 
console.log("Первое действие - в скобках. Т.к. операция префиксная, значение в скобках равно 2*2. Прибавляем один. Результат = 5");
alert(x);


// task 3

/*Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
 Затем написать скрипт, который работает по следующему принципу:
 если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/

console.log("************задание_3************")

a = parseInt(prompt("Input a: "));
b = parseInt(prompt("Input b: "))

if (a >= 0 && b >= 0) {
	alert("a - b = " + (a - b));
	console.log("Обе переменные - положительные. Выполнена операция \"Вычитание\". Результат: " + (a - b));	
}
else if (a < 0 && b < 0) {
	alert("a * b = " + (a * b));
	console.log("Обе переменные - отрицательные. Выполнена операция \"Умножение\". Результат: " + (a * b));	
}
else {
	alert("a + b = " + (a + b));
	console.log("Переменные разных знаков. Выполнена операция \"Сложение\". Результат: " + (a + b));	
}

console.log("************задание_4************")
//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

a = parseInt(Math.random()*15)
console.log("\"a\" = " + a)
switch (a) {
	case 0: console.log(0);
	case 1: console.log(1);
	case 2: console.log(2);
	case 3: console.log(3);
	case 4: console.log(4);
	case 5: console.log(5);
	case 6: console.log(6);
	case 7: console.log(7);
	case 8: console.log(8);
	case 9: console.log(9);
	case 10: console.log(10);
	case 11: console.log(11);
	case 12: console.log(12);
	case 13: console.log(13);
	case 14: console.log(14);
	case 15: console.log(15);

}


console.log("************задание_5************")
/*Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.
*/

function sum(x1, x2){
	return +a + +b;

}

function sub(x1, x2){
	return x1 - x2;
}

function mult(x1, x2){
	return x1 * x2;
}

function div(x1, x2){
	return x1 / x2;
}

a = 10, b = 5;
console.log("a = " + a + ", b = " + b +".");
console.log("sum(" + a + ", " + b + ") = " + sum(a, b));
console.log("sub(" + a + ", " + b + ") = " + sub(a, b));
console.log("mult(" + a + ", " + b + ") = " + mult(a, b));
console.log("div(" + a + ", " + b + ") = " + div(a, b));


console.log("************задание_6************")
/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости 
от переданного значения выполнить одну из арифметических операций (использовать функции из 
пункта 5) и вернуть полученное значение (применить switch).
*/

function mathOperation(arg1, arg2, operation){
	switch (operation) {
		case "+":
			return +arg1 + +arg2;
		case "-":
			return arg1 - arg2;
		case "*":
			return arg1 * arg2;
		case "/":
			return arg1 / arg2;
		default:
			return  "invalid operation"	
	}
}
a = 20, b = 4;
console.log("a = " + a + ", b = " + b +".");
console.log("action(" + a + ", " + b + ", \"+\") = " + mathOperation(a, b, "+"));
console.log("action(" + a + ", " + b + ", \"-\") = " + mathOperation(a, b, "-"));
console.log("action(" + a + ", " + b + ", \"*\") = " + mathOperation(a, b, "*"));
console.log("action(" + a + ", " + b + ", \"/\") = " + mathOperation(a, b, "/"));
console.log("action(" + a + ", " + b + ", \"!\") = " + mathOperation(a, b, "!"));


console.log("************задание_7************")
//Сравнить null и 0. Объяснить результат.
console.log("null == 0: " + (null == 0) + ". Null не равно 0. Т.к. - это отсутствие какого либо значения, в том числе нулевого.");
console.log("null === 0: " + (null === 0) + ". Тем более Null не может быть тождественно равно 0");
console.log("null > 0: " + (null > 0) + ". Сравнение с Null не возможно, т.к. Null не имеет определенного значения.");
console.log("null < 0: " + (null < 0) + ". Сравнение с Null не возможно, т.к. Null не имеет определенного значения.");
console.log("null <= 0: " + (null <= 0) + ". Т.к. (null > 0) не верно, следовательно обратное утверждение - верно.");
console.log("null >= 0: " + (null >= 0) + ". Т.к. (null < 0) не верно, следовательно обратное утверждение - верно.");


console.log("************задание_8************")
/*С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/
function power(val, pow) {

	if (pow == 1){
		return val;
	}
	return val*power(val, pow - 1);
}
a = 2, b = 10;
console.log("a = " + a + ", b = " + b + ".");
console.log("power(a, b) = " + power(a, b));