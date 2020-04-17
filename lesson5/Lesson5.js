
/*1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*/

function fillSmallCell(elem, type, reverse = false){
	var seq1 = [8,7,6,5,4,3,2,1];
	var seq2 = ['a','b','c','d','e','f','g','h'];
	var smallCell;
	for(var i = 0; i < 8; i ++){
		smallCell = document.createElement("div");
		if (type == 'digit') {	
			smallCell.className = "smallCell";}
		else {
			smallCell.className = "smallCell2";
		}
		elem.appendChild(smallCell);
		var p = document.createElement("p");
		smallCell.appendChild(p);
		if (type == 'digit'){
			if (i == 0){
				smallCell.className += " firstCell";	
			}
			if (reverse) {
				//добавить поворот
				/*
				smallCell.className += " rotate";
				*/
			}
			p.innerText = seq1[i];
		}
		else { //(type == 'letter')
			if (reverse) {
				//добавить поворот
			}
			if (i == 0){
				smallCell.className += " firstCell2";	
			} 
			smallCell.className += " floatLeft";
			p.innerText = seq2[i];
		}
	}
}


var container = document.getElementById("main")
var signs = document.createElement("div");
signs.className = "signs";
container.appendChild(signs);

var digs = document.createElement("div");
digs.className = "digs";
signs.appendChild(digs);
fillSmallCell(digs, 'digit');

var desk = document.createElement("div");
desk.className = "desk";
signs.appendChild(desk);
var lett = document.createElement("div");
lett.className = "lett";
desk.appendChild(lett);
fillSmallCell(lett, 'letter');
var cells = document.createElement("div");
cells.className = "cells";
desk.appendChild(cells);
lett = document.createElement("div");
lett.className = "lett";
desk.appendChild(lett);
fillSmallCell(lett, 'letter', true);

digs = document.createElement("div");
digs.className = "digs";
signs.appendChild(digs);
fillSmallCell(digs, 'digit', true);


var line, cell;



for (var i = 0; i<8; i++){
	line = document.createElement("div");
	line.className = "line";
	//line.innerHTML = ""; //
	cells.appendChild(line);
	for (var j = 0; j<8; j++){
		cell = document.createElement("div");
		cell.className = "cell";
		if ((i+j) % 2) {
			cell.className += " black";
			//cell.innerHTML = ""; для фигур
		}
		line.appendChild(cell);
	}
}
	

console.log(container);
