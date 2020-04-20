/*1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.
3) *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.
*/
/*
$(document).ready(function(){
  alert("JQuery runs");  
});
*/

function initPage(){
	div1.style.display = "none";
	div2.style.display = "none";
	div3.style.display = "none";
}

var div1 = document.getElementById("f1");
var div2 = document.getElementById("f2");
var div3 = document.getElementById("f3");

imgPaths =  ['large/_Cat.jpg','large/cover.jpg','large/Bear.jpg'];


basket = {
	items: [],
	records:0,
	sum:0,
	addItem: fAddItem,
	findItem: fFindItem,
	incItem: fIncItem,
	decItem: fDecItem,
	order:	function(){
		if (!this.records){
		alert('Ваша корзиная пустая. Перед размещением заказа заполните ее.');
			return;
		}
			
		alert('Ваш заказ оформляется. Спасибо за покупку.');
		this.clearBasket();		
	},
	clearBasket: fClearBasket,
	calcSum: function(){
		this.sum = 0;
		for (var i = 0; i < items.length; i++)
			this.sum += +items[i].price * (+items[i].amount);
	}
}
function fFindItem(name){
	if (!this.items.length) return -1;
	for (var j=0; j < this.items.length; j++)
		if (this.items[j].name == name) 
			return j;
	return - 1;
}
function fAddItem(item) {
	var index = this.findItem(item.name);
	var table = document.getElementsByClassName("tbody")[0];
	if ( index == -1){  // если нет, вставляем строчку полностью
		this.items.push(item);
		console.log(table);
	
		var tableRow = table.insertRow(index); //проверить! сначала 
		this.records++;
		this.sum += parseInt(item.price);
		var tableCell = tableRow.insertCell(0);
		tableCell.innerText = this.records;
		tableCell = tableRow.insertCell(1);
		tableCell.innerText = item.name;
		tableCell = tableRow.insertCell(2);
		tableCell.innerText = item.price;
		tableCell = tableRow.insertCell(3);
		tableCell.innerText = item.amount;
		tableCell = tableRow.insertCell(4);
		tableCell.innerText = item.amount * item.price;
		tableCell = tableRow.insertCell(5);
		tableCell.innerHTML = '<button onclick = "basket.decItem()">-</button>';//'<button class="small" onclick = ""> - </button>';
		tableCell = tableRow.insertCell(6);
		tableCell.innerHTML = '<button onclick = "basket.incItem()">+</button>';
	}
	else {
		this.items[index].amount +=1;	//добавляем только значение
		this.sum += +item.price;
		table.rows[index].cells[3].innerText = +table.rows[index].cells[3].innerText+1;
		table.rows[index].cells[4].innerText = +table.rows[index].cells[4].innerText + +item.price;
	}
	document.querySelector("span").innerHTML = this.sum;
}

function fDecItem() {
	var item = event.target.parentNode.parentElement.querySelectorAll("td"); 
	var index = +item[0].innerText - 1;
	this.sum = this.sum - +this.items[index].price;
	
	if (this.items[index].amount == 1) {
			//удалить строку
		table = document.getElementsByClassName("tbody")[0];
		table.deleteRow(index);
		this.items.splice(index,1);
		this.records--;
		for (i = 0; i < this.items.length; i++){										
			console.log(document.getElementsByClassName("tbody")[0]);//
			var curIndex = parseInt(document.getElementsByClassName("tbody")[0].rows[i].cells[0].innerText); 		
			if ( curIndex > index +1) {
				document.getElementsByClassName("tbody")[0].rows[i].cells[0].innerText = curIndex - 1;
			}
		}
	}
	else {
		this.items[index].amount -= 1;
		item[3].innerText = +item[3].innerText - 1;
		item[4].innerText = +item[4].innerText - +item[2].innerText; 
	}
	document.querySelector("span").innerHTML = this.sum;
}

function fIncItem() {
	var item = event.target.parentNode.parentElement.querySelectorAll("td"); 
	var index = +item[0].innerText - 1;
	this.items[index].amount += 1;
	this.sum = this.sum + +this.items[index].price;
	item[3].innerText = +item[3].innerText +1;
	item[4].innerText = +item[4].innerText + +item[2].innerText; 
	document.querySelector("span").innerHTML = this.sum;
}

function fClearBasket() {
	var table = document.getElementsByClassName("tbody")[0];
	var count = table.rows.length;
	for (i = count-1; i>=0; i--) 
		table.deleteRow(0);
	this.items = [];
	this.records = 0;
	this.sum=0;
	document.querySelector("span").innerHTML = this.sum;
}
function item(name, amount, price) {
	this.name = name;
	this.amount = amount;
	this.price = price;
}

function activateDiv(number = 1){
	switch (number) {
		case 1: 
			div1.style.display = "block";
			div2.style.display = "none";
			div3.style.display = "none";
			break;
		case 2:
			div1.style.display = "none";
			div2.style.display = "block";
			div3.style.display = "none";
			break;
		case 3:	
			div1.style.display = "none";
			div2.style.display = "none";
			div3.style.display = "block";
			break;
	}
}

function f1() {
		var arr = event.target.src.split('/');
		arr[arr.length-2] = 'large';
		var imgPath = arr.join('/');
		var img = new Image();
		img.src = imgPath;
		img.onerror = function(){alert('Картинка не найдена')};
		img.onload = function(){window.open(imgPath, '_blank')};
}


function f2() {
	//activateDiv(2);
	var product = event.target.parentNode;
	basket.addItem(new item(product.getElementsByClassName("productName")[0].textContent,
							1,
						    product.getElementsByClassName("price")[0].textContent));
}

var curPicIndex = 0;
function f3() {
	activateDiv(3);
	var imgFrame = document.getElementById("galery");
	console.log(imgFrame);
	imgFrame.src = imgPaths[curPicIndex];
}

function shiftRight(){
	var imgFrame = document.getElementById("galery");
	if (curPicIndex ==  imgPaths.length - 1)
		curPicIndex = 0;
	else
		curPicIndex++;
	imgFrame.src = imgPaths[curPicIndex];
}

function shiftLeft(){
	var imgFrame = document.getElementById("galery");
	if (curPicIndex == 0)
		curPicIndex = imgPaths.length - 1;
	else
		curPicIndex--;
	imgFrame.src = imgPaths[curPicIndex];
}
