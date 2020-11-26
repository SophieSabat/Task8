// - створити функцію яка виводить масив
//
// const arr = ['ok10', 987, false, 23456, 'Hello', 10<9, true, 8281.12];
//
// function printArr(arr) {
//     for (const element of arr) {
//         console.log(element);
//     }
// }
// printArr(arr);


// - створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
//
// let arr = [];
//
// function randomArr(arr) {
//     for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() *100));
//     }
// }
// randomArr(arr);
// printArr(arr);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
//
// function minNum(numOne, numTwo, numThree) {
//    let min = Math.min(numOne, numTwo, numThree);
//     console.log(min);
//     return min;
// }
// minNum(302,273,-193);


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function maxNum(numOne, numTwo, numThree) {
//     let max = Math.max(numOne, numTwo, numThree);
//     console.log(max);
//     return max;
// }
// maxNum(-23,231,72);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
// function numbers() {
//     let max = arguments[0];
//     let min = arguments[0];
//
//     for (const argument of arguments) {
//         if (argument > max) max = argument;
//         if (argument < min) min = argument;
//     }
//     console.log(max);
//     return min;
// }
// numbers(1,5,4,2,7,9,1,3);


// - створити функцію яка виводить масив
//
// const arr = [1,5,21,5,8,21,4,23,1,21,9876,235,876];
//
// function printArray(arr) {
//     console.log(arr);
// }
// printArray(arr);


// - створити функцію яка повертає найбільше число з масиву
//
// const arr = [1,5,21,5,8,21,4,23,1,21,9876,235,876];
//
// function maxNum(arr) {
//     let max = arr[0];
//     for (const element of arr) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(maxNum(arr));


// - створити функцію яка повертає найменьше число з масиву
//
// const arr = [1,5,21,5,8,21,4,23,1,21,9876,235,876];
//
// function minNum(arr) {
//     let min = arr[0];
//     for (const elenemt of arr) {
//         if (elenemt < min) {
//             min = elenemt
//         }
//     }
//     return min;
// }
// console.log(minNum(arr));


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//
// const arr = [1,5,21,5,8,21,4,23,1,21,9876,235,876];
//
// function sumator(arr) {
//     let sum = 0;
//     for (const element of arr) {
//         sum += element;
//     }
//     return sum;
// }
//
// console.log(sumator(arr));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// const arr = [1,5,21,5,8,21,4,23,1,21,9876,235,876];
//
// function serednyeAryfmetychne(arr) {
//     let sum = 0;
//     for (const element of arr) {
//         sum += element;
//     }
//     return sum/arr.length;
// }
//
// console.log(serednyeAryfmetychne(arr));


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     [123,133,293, false]
// ];
//
// function f(arr) {
//     let count = 0;
//     for (const element of arr) {
//         if (typeof element === 'object' && !Array.isArray(element)) {
//             count++;
//         }
//     }
//     return count;
// }
// const number = f(users);
// console.log(number);


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//
// function usersObj(array) {
//     let count = 0;
//     for (const element of array) {
//         if (typeof element === 'object' && !Array.isArray(element)){
//             for (const key in element) {
//                 count++
//             }
//         }
//     }
//     return count
// }
// const = usersObj(users);
// console.log(usr);


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// const arr = [1,2,3,4];
// const num = [2,3,4,5];
//
// function newArray(arrayOne, arrayTwo) {
//     const newArr = [];
//
//     for (let i = 0; i < arrayOne.length; i++){
//         newArr.push(arrayOne[i] + arrayTwo[i]);
//     }
//     return newArr;
// }
// const result = newArray(arr,num);
// console.log(result);


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// let arr = [1, 2, 3, 4];
//
// function editArray(arr, i) {
//     let array = [...arr];
//     if (i < array.length-1) {
//         let element = array[i];
//         array[i] = array[i+1];
//         array[i+1] = element;
//     }
//     return array;
// }
//
// const result = editArray(arr, 1);
// console.log(result);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// let numbers = [1,0,6,0,3,0,1,2,3,4];
//
// function editArra(array) {
//
//     let arrNum = [];
//     let arrZero = [];
//
//     for (const element of array) {
//         if (element === 0) {
//             arrZero.push(element);
//         }
//         else {
//             arrNum.push(element);
//         }
//     }
//     return arrNum.concat(arrZero);
// }
//
// const result = editArra(numbers);
// console.log(result);
//
//
//
//
// function editArrTwo(array) {
//
//     let newArr = [...array];
//
//     for (let i = newArr.length-1; i >= 0; i--) {
//         if (newArr[i] === 0) {
//             newArr.splice(i, 1);
//             newArr.push(0);
//         }
//     }
//     return newArr;
// }
//
// const result = editArrTwo(numbers);
// console.log(result);


// Створити функцію яка :

// - Додає в боді блок з текстом "Hello owu"
//
// function createBlock() {
//     const block = document.createElement('div');
//     block.innerText = 'Hello owu';
//     document.body.appendChild(block);
// }
//
// createBlock();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function createTxt(type,text) {
//     let element = document.createElement(type);
//     element.innerText = text;
//     document.body.appendChild(element);
// }
// createTxt('h3', 'HELLO OKTEN WEB UNIVERSITY');


// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//
//
// let cars = [
//     {model: 'Audi A4', year: 2007, power: 1.5, color: 'blue'},
//     {model: 'BMW X5', year: 1010, power: 2.2, color: 'black'},
//     {model: 'Porsche Cayenne', year: 2016, power: 2.4, color: 'white'},
//     {model: 'Toyota RAV4', year: 2015, power: 2.6, color: 'red'},
//     {model: 'Ford Focus', year: 2011, power: 2.2, color: 'dark blue'},
//     {model: 'Mercedes-Benz', year: 2020, power: 2.6, color: 'grey'},
//     {model: 'Peugeot 207', year: 2012, power: 1.6, color: 'black'},
//     {model: 'Opel Astra', year: 2006, power: 1.5, color: 'white'},
//     {model: 'Renault Megane', year: 2010, power: 2.2, color: 'yellow'},
//     {model: 'Volkswagen Tiguan', year: 2018, power: 2.4, color: 'white'},
// ];


// function carsList(array, id) {
//     const block = document.getElementById(id);
//     const ul = document.createElement('ul');
//
//     for (let i = 0; i < array.length; i++) {
//         const li = document.createElement('li');
//         const  car = array[i];
//         li.innerText = `${i} - ${car.model},  ${car.year}, ${car.power}, ${car.color}`
//         ul.appendChild(li);
//     }
//
//     block.appendChild(ul);
// }
// carsList(cars,'list');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
//
// function carsList(array, id) {
//     const elementById = document.getElementById(id);
//
//     for (let i = 0; i < array.length; i++) {
//         const car = array[i];
//         const block = document.createElement('div');
//         const model = document.createElement('h3');
//         const year = document.createElement('p');
//         const power = document.createElement('p');
//         const color = document.createElement('p');
//
//         model.innerText = `Model: ${car.model}`;
//         year.innerText = `Year: ${car.year}`;
//         power.innerText = `Power: ${car.power}`;
//         color.innerText = `Color: ${car.color}`;
//
//         block.appendChild(model);
//         block.appendChild(year);
//         block.appendChild(power);
//         block.appendChild(color);
//
//         elementById.appendChild(block);
//     }
// }
// carsList(cars, 'list');




// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
//
// function usersWithCities(userArray,cityArray) {
//     let users = JSON.parse(JSON.stringify(userArray));
//     let cities = JSON.parse(JSON.stringify(cityArray));
//
//     for (const user of users) {
//         for (const city of cities) {
//             if (user.id === city.user_id) {
//                 user.address = city;
//             }
//         }
//     }
//     return users;
// }
// const printNewArray = usersWithCities(usersWithId,citiesWithId);
// console.log(printNewArray);




// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
//
// function createElementToWrap(arr) {
//     const array = JSON.parse(JSON.stringify(arr));
//     let wrap = document.getElementById('wrap');
//
//     for (const element of array) {
//         let mainBlock = document.createElement('div');
//         let title = document.createElement('h3');
//         let body = document.createElement('p');
//
//         title.innerText = element.title;
//         body.innerText = element.body;
//
//         mainBlock.appendChild(title);
//         mainBlock.appendChild(body);
//         wrap.appendChild(mainBlock);
//     }
// }
//
// const outputWrap = createElementToWrap(rules);
// console.log(outputWrap);



// ===========додаткове від віктора========
// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
//
// let n = 8;
// function f(number) {
//     while (n > 1 && n % 2 === 0) {
//         n = n / 2;
//     }
//     if (n === 1) {
//         console.log('YES');
//     }
//     else {
//         console.log('NO');
//     }
// }
// f(n);




// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// const obj = {
//     name: 'Ivan',
//     age: 23,
//     skills: {
//         java: '10 years',
//         js: '3 years',
//         react: '3 years'
//     }
// }
//
// function cloneObj(obj) {
//     let clone = Object.assign({}, obj);
//
//     Object.keys(clone).forEach(
//         key =>
//             (clone[key] =
//                 typeof obj[key] === "object" ? cloneObj(obj[key]) : obj[key]));
//     return Array.isArray(obj) && obj.length ? (clone.length = obj.length) && Array.from(clone) : Array.isArray(obj) ? Array.from(obj) : clone;
// }
// console.log(cloneObj(obj));


// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
//
// let arr = [1,2,53,13, [33,12,5688,1222,['hello','okten'],232,], 332,22,92,12];
//
// function flatArray(array) {
//     console.log(array.flat(2));
//     return array;
// }
// flatArray(arr);


// ===========додаткове========