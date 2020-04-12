
function isEmpty(obj) {
    for (o in obj) {
        return!1;
    }    
    return!0;
}
// task1
/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/



console.log("********task_1************");

function Number(num){
    if (!(num === null))
        {
        this.hunderds = Math.round(num/100);
        this.tens = Math.round((num - this.hunderds*100)/10);
        this.units = num - this.hunderds*100 - this.tens*10;
        this.show = function(){
            alert("Единцы: " + this.units + ". Десятки: " + this.tens + ". Сотни: " + this.hunderds);    
        }
        this.dump = function(){
            console.log("Единцы: " + this.units + ". Десятки: " + this.tens + ". Сотни: " + this.hunderds);    
        }
    }
}

function generateNumber(val){
    if (isNaN(val)) {
        console.log("Число введено не корректно.");
        alert("Число введено не корректно.")
        return new Number(null); 
    }
    if (val < 0) {
        console.log("Число должно быть больше 0.");
        alert("Число должно быть больше 0.");        
        return new Number(null); 
    }
        if (val > 999) {
        console.log("Число должно не должно превосходить 999.");
        alert("Число должно не должно превосходить 999.");
        return new Number(null); 
    }
    return new Number(val);
}


while(1) {
    alert("Деление числа на единицы, десятки, сотни.")
    var val = prompt("Введите целое число от 0 до 999 (q - выход): ")
    if (val == "q") {
        console.log("Завершение по команде пользователя.");
        break;
    }
    else {
        var num = generateNumber(val);
        if (!(isEmpty(num))) {
            num.dump();
            num.show();
        }
    }
}

// task2
console.log("********task_2************");
var flag = false; // если true -  выход из игры 
//var answersLog = []; // собственно задание - записываем ответы пользователя.
var quest = {
	name: "",
	steps: 0,
	answerLog: [],
    q: questionaire,
    play: go,
	check: function (answer, step) { // проверяем ответ пользователя. 0-неверный ввод, 1 - корректный ввод, -1 - выход; 
		//prompt("check - debug");
		if (answer == -1) {
			console.log("Пользователь прервал игру.");
			flag = true;
			return -1;
		}
		if (isNaN(answer) || !isFinite(answer)) {
			alert('Вы ввели недопустимый символ');
			return 0;
    	}	
		if (answer < 1 || answer > this.q[step].number) {
			alert('Ваше число выходит из допустимого диапозона');
			return 0;
		}			
		return 1;							
	}

}

function go(step){ // step - номер шага (окна) в квесте. Если -1, то конец. иначе - рекурсивный вызов функции. 
	var answer, question;
	if (step < 0 ) {
		console.log(this.name + " закончил игру.");
		alert("Спасибо за игру.");
		return;
	}
	do { //цикл пока не получим правильный ответ
		// формируем строку запроса:
		if (isEmpty(this)) {
			alert("Obj is empty");
			exit();
		}
		question = this.q[step].q; // сначала вопрос
		for (var ans of this.q[step].a) {// потом в цикле варианты ответов
			question +=  ans;
		}
		question += '-1 - Выход из игры';
		answer = prompt(question); //задаем пользователю вопрос, соответствующий шагу квеста (номеру окна)
		answer = this.check(answer, step);
	}while (answer == 0); // пока не добьемся ответа в нужном диапазоне
	if (answer == -1) { //пользователь пожелал выйти 
		return;
	}
	this.answersLog.push(this.q[step].a[parseInt(answer)-1]); // записываем ответ пользователя
	//alert(answersLog.length);
	this.steps++;
	this.play(this.q[step].next[parseInt(answer)-1]); //переходим к следующему шагу (окну) квеста. -1 - т.к. индекс массива начинается с 0.
}

while(1) {
	if (flag) {
		break;
	}
    var name = prompt("Играем в квест. Введите свое имя для начала(q - выход): ");
    if (name == "q") {
        console.log("Завершение по команде пользователя " + quest.name +".");
        break;
    }
	quest.name = name;
	quest.answersLog = []; //сбрасываем журнал перед новой игрой
	quest.steps = 0;//сбрасываем счетчик ходов новой игрой
    quest.play(0);
	if (!flag) {
		var stepNumber = prompt("Мы записали все ваши ходы. Какой шаг вас интересует от 1 до " + quest.steps + "?");
		if (!isNaN(stepNumber) &&  (stepNumber > 0) && (stepNumber <= quest.steps)) {
			alert("Ваш ответ: " + quest.answersLog[stepNumber-1]);
			console.log("Пользователь " + quest.name +" запросил информацию о своем " + stepNumber + "-м шаге.");
		}
		else {
			alert("К сожалению, Ваш ответ не корректен.");
			console.log("Запрос пользователя " + quest.name +" не  корректный");
		}
		alert("Игра закончена");
	}
}

// task3
console.log("********task_3************");
alert('Тестирование на знание JavaScript.');
var messageString;
var sum = 0;
var checked = 0;
for (q of jsTest) {
	var checked = 0;
	messageString = q.qestion;
	messageString += '__________________________________\n';
	for (a of q.answers) {
		messageString += a;
		messageString += '\n';
	}
	do {
		answer = prompt(messageString);
		if (isNaN(answer) || !isFinite(answer)) {
			alert('Вы ввели недопустимый символ');
			continue;
    	}	
		if (answer < 1 || answer > jsTest.length) {
			alert('Ваше число выходит из допустимого диапозона');
			continue;
		}			
		checked = 1;	
	}while (checked == 0)
	if	(q.correct == (answer - 1)) {
		sum += q.cost;
		console.log('Ответ верный. Плюс ' + q.cost + ' баллов.');
	}
	else {
		console.log('Ответ не верный.');
	}	
}
alert('Тест закончен. Вы набрали ' + sum + ' баллов.');
console.log('Тест пройден с результатом ' + sum + ' баллов.');
