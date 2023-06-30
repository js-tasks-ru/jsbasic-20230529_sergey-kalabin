for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}
//Цикл от 0 до 4.


//числа

/* Обычные числа в JavaScript хранятся в 64-битном формате IEEE-754, который также называют «числа с плавающей точкой двойной точности» (double precision floating point numbers). Это числа, которые мы будем использовать чаще всего. Мы поговорим о них в этой главе.
BigInt числа дают возможность работать с целыми числами произвольной длины. Они нужны достаточно редко и используются в случаях, когда необходимо работать со значениями более чем (253-1) или менее чем -(253-1). Так как BigInt числа нужны достаточно редко, мы рассмотрим их в отдельной главе BigInt.
В данной главе мы рассмотрим только первый тип чисел: числа типа number. Давайте глубже изучим, как с ними работать в JavaScript. */

//В JavaScript можно использовать букву "e", чтобы укоротить запись числа. Она добавляется к числу и заменяет указанное количество нулей:

let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей

alert( 7.3e9 );  // 7.3 миллиардов (7,300,000,000)

//Другими словами, "e" производит операцию умножения числа на 1 с указанным количеством нулей.

1e3 = 1 * 1000
1.23e6 = 1.23 * 1000000

Сейчас давайте запишем что-нибудь очень маленькое. К примеру, 1 микросекунду (одна миллионная секунды):

let ms = 0.000001;
Записать микросекунду в укороченном виде нам поможет "e".

let ms = 1e-6; // шесть нулей, слева от 1


Округление

Одна из часто используемых операций при работе с числами – это округление.

В JavaScript есть несколько встроенных функций для работы с округлением:

Math.floor
Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
Math.ceil
Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
Math.round
Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
Math.trunc (не поддерживается в Internet Explorer)
Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.

Например, у нас есть 1.2345 и мы хотим округлить число до 2-х знаков после запятой, оставить только 1.23.

Есть два пути решения:

Умножить и разделить.

Например, чтобы округлить число до второго знака после запятой, мы можем умножить число на 100, вызвать функцию округления и разделить обратно.

let num = 1.23456;

alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.

let num = 12.34;
alert( num.toFixed(1) ); // "12.3"

Обратите внимание, что результатом toFixed является строка. Если десятичная часть короче, чем необходима, будут добавлены нули в конец строки:

let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", добавлены нули, чтобы получить 5 знаков после запятой
Мы можем преобразовать полученное значение в число, используя унарный оператор + или Number(), пример с унарным оператором: +num.toFixed(5).



//Неточные вычисления

Да-да, сумма 0.1 и 0.2 не равна 0.3.

Странно! Что тогда, если не 0.3?

alert( 0.1 + 0.2 ); // 0.30000000000000004

Можно ли обойти проблему? Конечно, наиболее надёжный способ — это округлить результат используя метод toFixed(n):

let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30


//parseInt и parseFloat

Для явного преобразования к числу можно использовать + или Number(). Если строка не является в точности числом, то результат будет NaN:

alert( +"100px" ); // NaN

Для этого есть parseInt и parseFloat.

Они «читают» число из строки. Если в процессе чтения возникает ошибка, они возвращают полученное до ошибки число. Функция parseInt возвращает целое число, а parseFloat возвращает число с плавающей точкой:

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке



Другие математические функции
В JavaScript встроен объект Math, который содержит различные математические функции и константы.

Несколько примеров:

Math.random()
Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (любое количество псевдослучайных чисел)
Math.max(a, b, c...) / Math.min(a, b, c...)
Возвращает наибольшее/наименьшее число из перечисленных аргументов.

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
Math.pow(n, power)
Возвращает число n, возведённое в степень power

alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024
В объекте Math есть множество функций и констант, включая тригонометрические функции, подробнее можно ознакомиться в документации по объекту Math.





/* 1 Вычислить сумму a + b
Задача – написать функцию factorial(n), которая возвращает n!, используя цикл (while или for). Решить нужно именно циклом, а не рекурсией.*/
function sum(m, n) {
  return +m + +n;
}

/* 2 Вычислить факториал  
Задача – написать функцию factorial(n), которая возвращает n!, используя цикл (while или for). Решить нужно именно циклом, а не рекурсией.*/

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120  рекурсия

//циклом
function factorial(n){
  let result = 1;
  while(n){
      result *= n--;
  }
  return result;
}

console.log(factorial(5));



/* 3 Сделать первый символ заглавным  Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst('вася') === 'Вася';*/

function ucFirst(str) {
  // ваш код...
  const strTrim = str.trim();
  if (str.length === 0 && str === '') {
    return '';
  };
  return `${strTrim[0].toUpperCase()}${strTrim.slice(1)}`;
};


console.log(ucFirst(" arya")); //Arya






/* 4 Усечение строки Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength. */

function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) {
    return str.slice(0, maxlength-1) + '…';
  };
  return str;
}

console.log(truncate('Всем привет!Всем привет!Всем привет!Всем привет!', 5));


let str
str = "Ahbfjhbjh"
console.log(str.length);



/* 5 Проверка на спам

Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру: 
checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false */


function checkSpam(str) {
  let strUpper = str.toUpperCase();
  if (strUpper.includes('1XBET')) {
    return true;
  }
  else if (strUpper.includes('XXX')) {
    return true;
  }
  return false;
};
console.log(checkSpam('Всем привет!Всем привет!Всем привет!Всем привет!')); //false
console.log(checkSpam('Всем прив 1XbeT nowем привет!Всем привет!Всем привет!')); //true

/* 6 Допишите функцию валидации имени пользователя  
Необходимо, чтобы на сайте можно было поприветствовать только пользователей, которые удовлетворяют следующему условию – имя не пустое, без пробелов, минимум 4 символа.*/

function isValid(name) {
  // ваш код...
  if (name.length === 0 && name === '') {
    return false;
  }
  else if (name.includes(' ')) {
    return false;
  }
  else if (name.length < 4) {
    return false;
  }
  else if (!name) {  //name !=  ‘’ && name != 0 && name != null && name != undefined
    return false;
  }
  return true;
}

console.log(isValid('null'));


function isValid(name) {
  switch (name) {
      case name.length === 0 && name === '':
          return false;
      case name.includes(' '):
          return false;
      case name.length < 4:
          return false;
      case !name:
          return false;
      default:
          return true;
  }
}

console.log(isValid(''));



function isValid(name) {
  return !!name && name.length >= 4 && !name.includes(' ');
}

console.log(isValid('nulfhvbl'));





/* 7 У нас есть объект, в котором хранятся зарплаты нашей команды:  */

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}


//Напишите функцию для суммирования всех зарплат. Должно получиться 3900. sumSalary(salaries); 

//Обратите внимание, что помимо зарплат, в объекте хранится дополнительная информация: тип валюты (currency), выплачена зарплата или нет(isPayed). Значения в этих свойствах могут быть любого типа, кроме числового.

/* Т.е. если в свойстве находится зарплата, то тип значения – число. Однако, перед сложением нужно не забыть исключить специальные числовые значения, которые нам не подходят: NaN, Infinity, -Infinity. А если служебная информация, тип значения – любой другой. Мы ожидаем получить сумму только зарплат, другие свойства следует игнорировать.

Также нужно учесть ситуацию, когда в объекте нет свойств, хранящих зарплаты. В таком случае функция должна вернуть 0. */

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}


//еще один вариант
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390


/* мое решение */


function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == 'number' && !isNaN(salaries[key]) && isFinite(salaries[key]) ) {
      sum += salaries[key];
    };
  };
  return sum;
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: -Infinity,
  currency: 'USD',
  isPayed: false
}

console.log( sumSalary(salaries) );

/* 8 Определите, пуст ли объект

Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.  */

function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false



/* 9 Создайте калькулятор 
Создайте объект calculator (калькулятор) с тремя методами:

read(a, b) (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read(numb1, numb2) {
    this.a = numb1;
    this.b = numb2;
  }
};

calculator.read(0, 5);
console.log( calculator.sum() );
console.log( calculator.mul() );



//Решение, которое мне понравилось

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}



/* 10 У вас есть массив объектов user, и в каждом из них есть user.name. Напишите функцию namify, которая преобразует их в массив имён.
Например: */


let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };
let users = [ vasya, petya, masha ];


function namify(users) {
  // Ваш код
  return users.map(item => item.name);
}

let names = namify(users); // ['Вася', 'Петя', 'Маша']
console.log( names );



/* 11 Напишите функцию filterRange(arr, a, b), которая принимает массив чисел arr, ищет в нём элементы между a и b и отдаёт массив этих элементов. Если элемент равен a или b, то его тоже нужно включить в отфильтрованный массив.
Функция должна возвращать новый массив и не изменять исходный.
Например: */

let arr = [5, 3, 8, 1];


function filterRange(arr, a, b) {
    // Ваш код
    return arr.filter(item => (a <= item && item <= b));
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)




/* 12 Напишите функцию camelize(str), которая преобразует строки вида 'my-short-string' в 'myShortString'.
То есть дефисы удаляются, а все слова после них получают заглавную букву.
Примеры: */
camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';

//P.S. Подсказка: используйте метод split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
//решения моё


function camelize(str) {
  // ваш код...
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}




/* 13 Создайте функцию showSalary, которая принимает массив пользователей users и максимальный возраст age и возвращает строку с именами и зарплатами пользователей, у которых возраст меньше или равен параметру age. */
// users - массив пользователей
// age - максимальный возраст пользователей (любое число)
let result = showSalary(users, age);
//users – это массив пользователей, где каждый пользователь представлен объектом, содержащим следующие обязательные поля:
// Объект одного пользователя
let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
// Массив пользователей
let users = [user1, ...]
//Функция showSalary должна возвращать строку из имён и баланса подходящих пользователей, в формате:
/* 'Golden Branch, $1,825.65
Duncan Randall, $1,490.15'
(!!!) Обратите внимание, что каждый пользователь находится на новой строке. Это сделано специально и должно быть учтено в решении.
(!!!) При этом нужно учесть, что после последней строки не нужно добавлять перевод строки. При проверке решения это условие также учитывается. */



function showSalary(users, age) {
  // ваш код...
  return users
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
}






/* 14 Реализуйте функцию, которая принимает строку с числами и возвращает объект, содержащий минимальное и максимальное значения чисел из этой строки.
Пример строки, которую принимает функция: */
const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
/* Элементы в строке могут быть разделены только одним пробелом. При этом кроме чисел там могут быть слова и нечисловые символы (+, -, = и др).
Возврат значения
Результат функция должна возвращать в виде объекта в формате: */

let result = {
    min: -5.8,
    max: 73
}

//Пример работы функции:
let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  // ваш код
  let regexp = str.match(/-?\d+(\.\d+)?/g);
  let minNumber = Math.min(regexp);
  let maxNumber = Math.max(regexp);
}//не работает




function getMinMax(str) {
  if (!str) return null;
  let arr = str.match(/-?\d+(\.\d+)?/g).map(it => { return +it; });
  return {min: Math.min(...arr), max: Math.max(...arr)};
};

console.log(getMinMax('1 и -5.8 или 10 хотя 34 + -5.3 и 73')); // { min: -5.8, max: 73  }



/* 15 Необходимо реализовать функцию makeFriendsList, которая преобразует переданный массив друзей в стандартный HTML список (ul, li).

Массив с друзьями имеет следующий формат: */


let friends = [
  {
      firstName: 'Artsiom',
      lastName: 'Mezin'
  },
  {
      firstName: 'Ilia',
      lastName: 'Kantor'
  },
  {
      firstName: 'Christopher',
      lastName: 'Michael'
  }
];


/* Функция должна вернуть DOM элемент ul, внутри которого будет список друзей: */

<ul>
   <li>Artsiom Mezin</li>
   <li>Ilia Kantor</li>
   <li>Christopher Michael</li>
</ul>



function makeFriendsList(friends) {
  //ваш код
  let ul = document.createElement('ul');
  for (let item of friends) {
      let li = document.createElement('li');
      li.innerHTML = `${item.firstName} ${item.lastName}`;
      ul.appendChild(li);
  }
  return ul;
}



/* 16 Напишите функцию makeDiagonalRed, которая выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их красным. Структуру элементов таблицы можно посмотреть в файле index.html, рядом с index.js. */



function makeDiagonalRed(table) {
  // ваш код
  let tableDiagonalRed = document.body.firstElementChild;

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
  return tableDiagonalRed;
}

// Где в переменной table находится DOM-элемент для тега <table>
makeDiagonalRed(table);


/* Как должно получиться, можно посмотреть, открыв в браузере страничку с результатом: /result.view/index.html.

P.S. для решения рекомендуется использовать свойства rows таблицы (элемент <table>) и cells элемента строки (элемент <tr>). Подробнее об этом можно прочитать вот тут;

Чтобы сделать ячейку красной, рекомендуется использовать свойство style, которое есть у всех элементов. Почитать подробнее можно вот тут */

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}


/* 17 Напишите функцию highlight, которая внесёт изменения в таблицу.

В качестве аргумента функция принимает элемент таблицы (тег table) c вот такой структурой: */

<table class="js-teachers">
  <thead>
    <tr>
      <td>Name</td>
      <td>Age</td>
      <td>Gender</td>
      <td>Status</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ilia</td>
      <td>30</td>
      <td>m</td>
      <td data-available="true">Free</td>
    </tr>
    <tr>
      <td>Tim</td>
      <td>39</td>
      <td>m</td>
      <td data-available="false">On duty</td>
    </tr>

    <!-- Строк в таблице может быть больше-->
  </tbody>
</table>

/* Функция highlight для каждой строки tr таблицы должна сделать следующее:

Проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status. Если её значение true – класс available, если её значение false – класс unavailable.
Проставить атрибут hidden, если атрибута data-available нет вообще.
Проставить класс male/female в зависимости от содержимого ячейки Gender. Если её значение m – класс male, Если её значение f – класс female.
Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.
(!!!) Обращаем отдельное внимание, что все манипуляции нужно делать со СТРОКАМИ таблицы (тег tr). Т.е. вы проверяете ячейку (тег td), но изменяете строку (тег tr). Это распространённая ошибка, из-за которой часто не проходит автоматическая проверка. */



function highlight(table) {
  for (let tr of table.children[1].rows) { // для каждой строки tr таблицы
      let available = tr.cells[3];
      if (available.hasAttribute("data-available"))
          switch (available.dataset.available) {
              case "true":
                  tr.classList.add("available");
                  break;
              case "false":
                  tr.classList.add("unavailable");
          }
      else  
          tr.hidden = true;
       
      let gender = tr.cells[2].textContent;
      switch (gender) {
          case "m":
              tr.classList.add("male");
              break;
          case "f":
              tr.classList.add("female");
      }
      // Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.
      let age = +tr.cells[1].textContent;
      if (age < 18) tr.style.textDecoration = "line-through";
  }
}

let table = document.querySelector(".js-teachers");
highlight(table);




//решение учителя

const FIRST_COLUMN = 1;
const SECOND_COLUMN = 2;
const THIRD_COLUMN = 3;

function highlight(table) {
  const actions = {
    [THIRD_COLUMN]: (root, td) => {
      if (td.dataset.available === 'true') {
        root.classList.toggle('available', true);
      } else if (td.dataset.available === 'false') {
        root.classList.toggle('unavailable', true);
      } else if (!td.hasAttribute('data-available')) {
        root.hidden = true;
      }
    },
    [SECOND_COLUMN]: (root, td) => {
      if (td.textContent === 'm') {
        root.classList.toggle('male', true);
      } else if (td.textContent === 'f') {
        root.classList.toggle('female', true);
      }
    },
    [FIRST_COLUMN]: (root, td) => {
      const age = parseInt(td.textContent, 10);

      if (age < 18) {
        root.style.textDecoration = 'line-through';
      }
    },
  };

  for (const tr of table.rows) {
    Array.from(tr.cells).forEach((td, index) => {
      const fn = actions[index];

      if (typeof fn === 'function') {
        fn(tr, td);
      }
    });
  }
}



/* 18 Напишите функцию hideSelf, которая сделает так, чтобы кнопка с классом hide-self-button скрывала себя по нажатию. Чтобы скрыть кнопку, добавьте ей атрибут hidden. */

<button class="hide-self-button">Нажмите, чтобы спрятать</button>


function hideSelf() {
  // ваш код...
  let button = document.querySelector('.hide-self-button');
  console.log( button );
  button.onclick = function() {
    button.hidden = true;
  };
  return button;
}

hideSelf();



/* 19 Напишите функцию toggleText, которая сделает так, чтобы при первом нажатии на кнопку с классом toggle-text-button текст <div id="text">Текст</div> исчезал, а при повторном нажатии появлялся. Чтобы скрыть текст, добавьте ему атрибут hidden и наоборот. */

<button class="toggle-text-button">Нажмите, чтобы спрятать/показать текст</button>
<div id="text">Текст</div>



function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('.text');
  button.onclick = function() {
    if (text.hasAttribute("hidden")) {
      return text.hidden = true;
    };
    return text.hidden = false;
}

toggleText();  //не работает


//мой работающий спойлер
function toggleText() {
  // ваш код...
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  button.onclick = function() {
    if (text.getAttribute("hidden")) {
      text.removeAttribute("hidden")
     } else {
     text.setAttribute("hidden", "hidden")
     };
  };
}

toggleText(); //работает



/* <button class="toggle-text-button">Нажмите, чтобы спрятать/показать текст</button>
<div id="text">Текст</div> */

//мой работающий спойлер с делегированием
function toggleText() {
  // ваш код...
  document.addEventListener('click', function(event) {
    console.log (event);  //объект по которому кликнули
    if (event.target.classList.contains("toggle-text-button")) {
      let elem = document.querySelector(text);

      elem.hidden = !elem.hidden;
    }
    let button = document.querySelector('.toggle-text-button');
    if (!button) return;

    
  });
} 

toggleText(); //работает



/* 20 Учебный проект (пролог): Карусель */


/* «Карусель» – компонент интерфейса, который состоит из перемещающихся по клику на стрелки слайдов.

Вы можете посмотреть её вёрстку (пока не «живую» карусель) в файле index.html.

Рабочую карусель можно увидеть вверху страницы проекта.

Такую карусель предстоит написать вам. Вся вёрстка и весь CSS уже готовы, их изменять не нужно. */

function initCarousel() {
  // ваш код...
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselInnerWidth = carouselInner.offsetWidth;
  carouselArrowRight.onclick = function() {
    carouselInner.style.transform = 'translateX(`-${carouselInnerWidth}px)`)'
  };
  carouselArrowLeft.onclick = function() {
    carouselInner.style.transform = 'translateX(`+${carouselInnerWidth}px)`)'
  };
  
}
let carouselInner = document.querySelector('.carousel__inner');
let carouselInnerWidth = carouselInner.offsetWidth;
console.log(`- ${carouselInnerWidth}px)`);
// после того, как эта функция выполнится, в карусели должны начать переключаться слайды
/* Слайды должны перемещаться влево/вправо при клике по кнопкам вперёд/назад.

Их CSS классы:

.carousel__arrow_right – класс кнопки переключения на слайд вперёд;
.carousel__arrow_left – класс кнопки переключения на слайд назад;
Все слайды равны по ширине. В этом задании их для простоты ровно 4, и на это количество можно опираться в коде.

Как (технически) переключается карусель?
Структура карусели такова, что есть внешний элемент, в котором находится «лента» из подряд идущих слайдов. Внешний элемент имеет фиксированную ширину, поэтому видна только часть ленты (один слайд).

CSS класс элемента-ленты, в котором находятся все слайды – .carousel__inner. Для переключения слайда мы будем сдвигать его на ширину одного слайда.

Допустим, что ширина одного слайда 300px. Она может быть любой, точную ширину элемента, независимо от вёрстки, можно получить при помощи его свойства offsetWidth. Там хранится только число, без px. Подробнее про offsetWidth.

Чтобы переключить на второй слайд, нужно переместить элемент с классом .carousel__inner на 300px влево. Это можно сделать, изменив его свойство transform следующим образом: elem.style.transform = 'translateX(-300px)'.

Мы используем отрицательное значение пикселей, т.к. нам нужно сдвинуть весь элемент влево, если бы значение было положительное, он переместился бы наоборот вправо. Подробнее про свойство style.

Чтобы переключить ещё на один слайд вперёд, нужно наш элемент сдвинуть ещё на 300px, вот так: elem.style.transform = 'translateX(-600px) и т.д.

Скрываем кнопки переключения при достижении крайних слайдов
Когда пользователь дошёл до 4-ого слайда, нужно скрыть кнопку переключения вперёд, и наоборот, когда пользователь видит первый слайд, нужно скрыть кнопку переключения назад.

Скрывать и показывать кнопки нужно с помощью CSS свойства display, вот так:

carouselArrow.style.display = 'none' – скрыть кнопку,
carouselArrow.style.display = '' – показать кнопку,
(Предполагается, что в переменной carouselArrow содержится ссылка на кнопку переключения слайдов). */





function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselInnerWidth = carouselInner.offsetWidth;
  let countSlide = document.querySelectorAll('.carousel__slide').length;
  console.log(countSlide) //4 слайда
  let activeIndex = 0;

  setArrow(activeIndex, arrowRight, arrowLeft, countSlide);

  arrowRight.addEventListener( "click", () => {
    activeIndex++;
    carouselInner.style.transform = `translateX(-${activeIndex * carouselInnerWidth}px)`;
    setArrow(activeIndex, arrowRight, arrowLeft, countSlide);
  });

  arrowLeft.addEventListener( "click", () => {
    activeIndex--;
    carouselInner.style.transform = `translateX(-${activeIndex * carouselInnerWidth}px)`;
    setArrow(activeIndex, arrowRight, arrowLeft, countSlide);
  });
}

function setArrow(activeIndex, arrowRight, arrowLeft, countSlide) {
  if (activeIndex === 0) {
    arrowLeft.style.display = 'none';
  } else {
    arrowLeft.style.display = '';
  }

  if (activeIndex >= countSlide -1) {
    arrowRight.style.display = 'none';
  } else {
    arrowRight.style.display = '';
  }
}



/* 21 Таблица с удаляемыми строками */


/* В этом задании нужно создать таблицу с возможностью удаления строк.

Вы получаете данные в виде массива.

Пример данных:
 */



let rows = [
  {
      name: 'Вася',
      age: 25,
      salary: 1000,
      city: 'Самара'
  },
  {
      name: 'Петя',
      age: 30,
      salary: 1500,
      city: 'Москва'
  }
];



/* class UserTable {
  constructor(tableRows) {
    this.tableRows = tableRows;
  }

  render() {
    this.elem = document.createElement('TABLE');

    this.elem.innerHTML = this.tableRows
      .map(({ name, age, salary, city }) => `<tbody><tr><td>${name}</td><td>${age}</td><td>${salary}<td></td>${city}</td><td><button>X</button></td></tr></tbody>`)
      .map(({ name, age, salary, city }) => `<tbody><tr><td>${name}</td><td>${age}</td><td>${salary}<td></td>${city}</td></tr></tbody>`)
      .join('');

    this.elem.addEventListener('click', this.onNewsItemClick);

    return this.elem;
  }

  onNewsItemClick = (event) => {
    console.log(this.a);

    if (event.target.closest('li')) {
      event.target.closest('li').style.textDecoration = 'line-through';
    }
  }
}

let table = new UserTable(rows);
document.body.appendChild(table.elem);

document.body.append( table.render() );

console.log('newComponent:', table); */




//верное решение

class UserTable {
  #rows;
  #elem;

  constructor(rows) {
      this.#rows = rows;
      this.#elem = document.createElement("table");
      this.makeHTML();
  }
  get elem() {
      return this.#elem;
  }
  makeHTML() {
      let s = `      
      <thead>
      <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
      </tr>
      </thead>
      <tbody>` + this.#rows.map(e => `
      <tr>
          <td>${e.name}</td>
          <td>${e.age}</td>
          <td>${e.salary}</td>
          <td>${e.city}</td>
          <td><button>X</button></td>
      </tr>              
              `).join("") + `</tbody>`;
      this.#elem.innerHTML = s;
      for (let b of this.#elem.querySelectorAll("button"))
          b.addEventListener("click", this);
  }
   handleEvent(event) {
      let row = event.target.parentElement.parentElement; // event.target указывает на нажатую кнопку
      this.#rows.splice(row.rowIndex - 1, 1); // this указывает на свой экземпляр класса
      row.remove();
      console.log(this.#rows); // Тестирование
  }
}



/* 22 Учебный проект: Карточка товара */


/* Создайте класс ProductCard, описывающий компонент «Карточка товара».

В качестве аргумента в конструктор класса передаётся объект, описывающий товар: */

let product = {
    name: "Laab kai chicken salad", // название товара
    price: 10, // цена товара
    category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
    image: "laab_kai_chicken_salad.png", // название картинки товара
    id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
}

let productCard = new ProductCard(product);




//моё решение

import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = this.render(product);
  }

  render(product) {
    let card = createElement(`
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);

    this.addEvents(card, product.id);

    return card;
  }

  addEvents(elem, id) {
    elem.querySelector(".card__button").addEventListener("click", event => {
      event.target.closest(".card").dispatchEvent(new CustomEvent("product-add", {
        detail: id,
        bubbles: true
      }))
    });
  }
}





/* 23 Учебный проект: Лента-Меню */

/* Создайте класс RibbonMenu, описывающий компонент «Ленты-Меню»(для простоты будем называть его «меню»). Данный компонент представляет из себя список категорий товаров ресторана. В конечном итоге, мы будем показывать товары только той категории, которую выбрал пользователь. */

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render(categories);
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    this.ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    this.ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    this.ribbonArrows ();
    this.ribbonArrowRight.addEventListener('click', () => this.scrollRight());
    this.ribbonArrowLeft.addEventListener('click', () => this.scrollLeft());
    this.elem.addEventListener('click', (event) => this.chooseRibbonItem(event));
  }
  render(categories){
    let ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');
    ribbon.innerHTML = `
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner"></nav>
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`;
    let ribbonInner = ribbon.querySelector('.ribbon__inner');
    let ribbonElem = categories.map(category => `
    <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
    `).join('');
    ribbonInner.innerHTML = ribbonElem;
    return ribbon;
  }

  scrollRight() {
    this.ribbonInner.scrollBy(350, 0);
  }

  scrollLeft() {
    this.ribbonInner.scrollBy(-350, 0);
  }

  ribbonArrows (){
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let arrows = this.elem.querySelectorAll('.ribbon__arrow');
    ribbonArrowRight.classList.add('ribbon__arrow_visible');
    ribbonArrowLeft.classList.remove('ribbon__arrow_visible');

    for (let arrow of arrows) {
      arrow.addEventListener('click', function () {
        let scrollLeft = ribbonInner.scrollLeft;
        let clientWidth = ribbonInner.clientWidth;
        let scrollWidth = ribbonInner.scrollWidth;
        let scrollRight = scrollWidth - scrollLeft - clientWidth;

        if (scrollLeft == 0 ) {
          ribbonArrowLeft.classList.toggle('ribbon__arrow_visible');
        } 
        if (scrollRight < 1 ) {
          ribbonArrowRight.classList.toggle('ribbon__arrow_visible');
        } 
    });
    }
  } 

  chooseRibbonItem(event) {
    let elems = this.elem.querySelectorAll('.ribbon__item');
    Array.from(elems).map(elem => {
        elem.classList.remove('ribbon__item_active');
        event.preventDefault();
        event.target.classList.add('ribbon__item_active');

        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: event.target.dataset.id,
          bubbles: true
        }));
    });
  }
}






/* 24 Учебный проект: Модальное окно */


/* "Модальное окно" - компонент, который открывается поверх основного интерфейса и блокирует работу с ним, пока пользователь его не закроет. Вы уже сталкивались с функциями, открывающими стандартные браузерные модальные окна - это функции `alert`, `prompt`, `confirm`. Но они нам не всегда подходят, ведь мы не можем управлять их внешним видом, а также влиять на их содержимое. Поэтому для нужд проекта мы создадим свой компонент, лишённый этих недостатков. */




export default class Modal {
  constructor() {
    this.render();
    this.elem.addEventListener('click', (event) => this.onClick(event));
  }
  render() {
    this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `);
  }

  sub(ref) {
    return this.elem.querySelector(`.modal__${ref}`);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    this._keydownEventListener = (event) => this.onDocumentKeyDown(event);
    document.addEventListener('keydown', this._keydownEventListener);

    if (this.elem.querySelector('[autofocus]')) {
      this.elem.querySelector('[autofocus]').focus();
    }
  }

  onClick(event) {
    if (event.target.closest('.modal__close')) {
      event.preventDefault();
      this.close();
    }
  }

  onDocumentKeyDown(event) {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }

  setTitle(title) {
    this.sub('title').textContent = title;
  }

  setBody(node) {
    this.sub('body').innerHTML = '';
    this.sub('body').append(node);
  }

  close() {
    document.removeEventListener('keydown', this._keydownEventListener);
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}





/* 25 Учебный проект: Пошаговый слайдер, часть 1 */


/* Слайдер – это компонент интерфейса, позволяющий пользователю выбрать числовое значение в указанных пределах.

В современном браузерном HTML он представлен инпутом со специальным типом:
 */
/*<input type="range" id="volume" name="volume" min="0" max="11">

/* Но для сложных проектов он не всегда подходит, т.к. ограничен в возможностях изменения дизайна и функциоальности. Поэтому мы создадим свой слайдер, который полностью отвечает нашим требованиям.

Мы будем его использовать для выбора максимальной остроты товаров. Это нужно, чтобы показывать в списке товаров только те, которые соответствуют заданной максимальной остроте.

В этой задаче мы создадим слайдер, который меняет свое значение по клику. А в следующей – добавим возможность «перетягивания» бегунка (пока это не нужно).

Cоздайте класс StepSlider, описывающий компонент «Пошаговый слайдер» (для простоты будем называть его просто слайдер). */




import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;
    this.render();
    this.addEventListeners();
    this.setValue(value);
  }
  render() {
    this.elem = createElement(`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value"></span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          ${'<span></span>'.repeat(this.steps)}
        </div>
      </div>
    `);
  }

  setValue(value) {
    this.value = value;

    let valuePercents = (value / this.segments) * 100;

    this.sub('thumb').style.left = `${valuePercents}%`;
    this.sub('progress').style.width = `${valuePercents}%`;

    this.sub('value').innerHTML = value;

    if (this.sub('step-active')) {
      this.sub('step-active').classList.remove('slider__step-active');
    }

    this.sub('steps').children[this.value].classList.add('slider__step-active');
  }

  addEventListeners() {
    this.elem.onclick = this.onClick;
  }

  onClick = event => {
    let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

    this.setValue(Math.round(this.segments * newLeft));

    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }
}





/* 26 Учебный проект: Пошаговый слайдер, часть 2 */


/* Изменение значения с помощью Drag-and-Drop.
За основу работы этого механизма взят алгоритм из статьи Drag’n’Drop с событиями мыши. Мы настоятельно рекомендуем разобраться в принципе работы примера из статьи перед тем как приступать у решению.

Принцип работы Drag-and-Drop:

Пользователь наводит курсор мыши на ползунок слайдера и кликает по нему.
Зажав кнопку мыши он перемещает ползунок влево или вправо. Ползунок перемещается по слайдеру, следуя за курсором.
Пользователь отпускает кнопку мыши в любом месте слайдера.
Ползунок перемещается на ближайший шаг слайдера. */




  // Drag and Drop
  // 1) mousedown - готовим элемент к перемещению (position: absolute + z-index)
  // 2) mousemove - передвигаем элемент на новые координаты (left, top)
  // 3) mouseup - остановить перенос элемента + чистка DnD


  let sliderThumb = document.querySelector('.slider__thumb');


  sliderThumb.onpointerdown = function(event) {
    console.log('event.pointerType:', event.pointerType);
    console.log( sliderThumb.getBoundingClientRect() );
    let shiftX = event.clientX - sliderThumb.getBoundingClientRect().left;
    let shiftY = event.clientY - sliderThumb.getBoundingClientRect().top;
    let parentBoxSlider = document.querySelector('.slider')

    // 1
    parentBoxSlider.classList.add('slider_dragging');
    sliderThumb.style.position = 'absolute';
    sliderThumb.style.zIndex = 9999999;


    // 2
    function onMouseMove(event) {
      let x = event.pageX - shiftX;
      let y = event.pageY - shiftY;

      sliderThumb.style.left = `${x}px`;
      sliderThumb.style.top = `${y}px`;
    };
    document.addEventListener('pointermove', onMouseMove);

    // 3
    sliderThumb.onpointerup = function() {
      parentBoxSlider.classList.remove('slider_dragging');
      document.removeEventListener('pointermove', onMouseMove);
      sliderThumb.onpointerup = null;
    };
  }

  sliderThumb.ondragstart = () => false;

