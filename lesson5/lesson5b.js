symb = [['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',''], // 0- строка
	 ['8','&#9820','&#9822','&#9821','&#9819','&#9818','&#9821','&#9822','&#9820','8'],// 1- строка: черные фигуры;
	 ['7','&#9823','&#9823','&#9823','&#9823','&#9823','&#9823','&#9823','&#9823','7'],// 2-строка: черные пешки; 
	 ['6','','','','','','','','','6'], //3 - строка: пустая 
	 ['5','','','','','','','','','5'], //4 - строка: пустая
	 ['4','','','','','','','','','4'], //5 - строка: пустая
	 ['3','','','','','','','','','3'], //6 - строка: пустая
	 ['2','&#9817','&#9817','&#9817','&#9817','&#9817','&#9817','&#9817','&#9817','1'], // 9-строка: белые пешки;
	 ['1','&#9814', '&#9816','&#9815','&#9813','&#9812','&#9815','&#9816','&#9814','2'],  // 7- строка: белые фигуры
	 ['','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',''] // нижний ряд букв 
	 ]

var parent = document.getElementById("main");

var table = document.createElement("table");
table.style.borderCollapse = "collapse";
parent.append(table);

for (i = 0; i <= 9; i++) {
	var tableRow = table.insertRow(i);
	for (j = 0; j <= 9; j++) {
		var tableCell = tableRow.insertCell(j);
		if ((i==0)&&(j ==0)||(i==0)&&(j==9)||(i == 9)&&(j==0)||(i==9)&&(j ==9)) continue; // исключаем углы
		tableCell.innerHTML = symb[i][j];
		if ((i>0) && (j>0) && (i<9) && (j<9)) // раскрашиваем доску
			tableCell.className = (i + j) % 2 ? "cell cellBlack" : "cell cellWhite";
		else if (j == 0) { // левый ряд								 
			tableCell.className += " digitsLetters leftDigs";	
		}	
		else if (j == 9) { // правый ряд								 
			tableCell.className += " digitsLetters rightDigs rotate";	
		}
		else if (i == 0) { // правый ряд								 
			tableCell.className += " digitsLetters topLetters rotate";	
		}
		else if (i == 9) { // правый ряд								 
			tableCell.className += " digitsLetters bottomLetters";	
		}
	}	
}