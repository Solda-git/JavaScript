/*
Файл с опросником модифицирован следующим образом:
1. из сплошной структуры преобразован в массив, состоящий из одиночного вопроса и вариантов ответов;
2. в каждый элемент массива добавлены поля, в которых прописаны следующие "окна", куда попадет пользователь 
при том или ином выборе.
Таким образом:
- в играу можно добавить произвольное количество вопросов;
- логику игры можно гибко менять, заменяя номер "окна" в соответсвующем атрибуте вопроса;
- при изменении логики игры не требуется перепрограммировать сам код скрипта, который стал универсальным.
*/

var questionaire = [{
    q:'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
    'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
    'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
    number: 2,
    a: ['1 - Поспать до обеда\n','2 - Пойти прогуляться\n'],
    next: [1, 2]
    }, 
    {
    q: 'Вы решили поспать до обеда.\n' +
    'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
    'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
    number: 2,
    a: ['1 - Пойти прогуляться\n','2 - Пойти пообедать\n'],
    next: [3,3]    
    },
    {
    q: 'Вы решили пойти прогуляться.\n' +
    'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
    'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
    'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
    'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
    'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
    'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
    number: 2,
    a: ['1 - Подождать обед в столовой\n','2 - Поколоть дров перед обедом\n'],
    next: [3,3]
    },
    {
    q: 'Здесь пишем текст повествования.\n' +
    'Потом пишем несколько действий, например, два\n',
    number: 2, // кол-во ответов
    a: ['1 - 1-й ответ\n', '2 - 2-й ответ\n'],
    next: [-1, -1]    
}];


