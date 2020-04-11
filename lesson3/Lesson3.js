
//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
console.log("********task_1************");

var arrSize = 100; 

function cieve(size) {
	var eratosphenes = new Array(size+1), primes = new Array();	
	for (var i = 2; i <= Math.ceil(Math.sqrt(size+1)); i++) {
		if (eratosphenes[i] == 1) {
			continue;
		} 
		for (var j = i*i; j < size + 1; j+=i) {
			eratosphenes[j] = 1
		}
	}
	for (i = 2; i <= size; i++)
		if (isNaN(eratosphenes[i])) {
			primes.push(i);
		}
	return primes;
}

var myArr = new Array();
 myArr = cieve(arrSize);
for (var j = 1; j < myArr.length; j++) {
	console.log(j + "-й элемент: " + myArr[j]);
}

//2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал 
//подсчета стоимости корзины в зависимости от находящихся в ней товаров.
console.log("********task_2************");
console.log("Смотри п. 3.b");
//3. Товары в корзине хранятся в массиве. Задачи:

function calc_basket_total(basket) {
	var sum = 0; 
	for (i=0; i < basket.length; i++) {
		sum += basket[i].price*basket[i].amount;	
	}
	return sum;
}

function basket_dump(basket) {
	console.log("Basket contains:");
	for (var i = 0; i < basket.length; i++) {
		console.log(i+". Name: " + basket[i].name + "; Price: " + basket[i].price + "; Amout: " + basket[i].price + ".");
	}
	console.log("Basket total price: " + calc_basket_total(basket));
}


//a) Организовать такой массив для хранения товаров в корзине;
console.log("********task_3a************");
var basket = [
	{ name: "cucumber",
	  price: 50,
	  amount: 3 
	},
	{ name: "tomato",
	  price: 120,
	  amount: 5 
	},
	{ name: "potato",
	  price: 50,
	  amount: 3 
	}
]
console.log("Выведем дамп содержимого корзины.");
basket_dump(basket);
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
console.log("********task_3b************");
console.log("В корзине три товара: огурцы, помидоры и картошка. Посчитаем сумму.");
console.log(calc_basket_total(basket));

basket_item = { 
	name: "carrot",
	price: 10,
	amount: 10 
};

console.log("Добавляем морковь. Считаем сумму.");
basket.push(basket_item);
console.log(calc_basket_total(basket));


//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}
console.log("********task_4************");
for(var iter = 0; iter < 9; iter++, console.log("Вывод в цикле с пустым телом, шаг - " + iter)){}

//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
/*
x
xx
xxx
xxxx
xxxxx
*/
console.log("********task_5************");
var symb = "", i = 1;

while (i<=20) {
	symb += "x";
	console.log(i + ": " + symb);
	i++;
}
