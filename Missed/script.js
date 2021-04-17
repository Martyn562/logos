// let a = parseFloat('10dsd');

// console.log(a);
// const arr = [{
//     name: 'Vasia',
//     age: 25,
//     isDeveloper: true,
//     number: '38063636267'
// },
// {
//     name: 'Andrii',
//     age: 10,
//     isDeveloper: false
// }
// ];

// const arr2 = arr.map(person => {
//     console.log(person.number?.length);
// });

// const object1 = {
//     name: 'Vasia',
//     age: 25,
//     isDeveloper: true,
//     number: '38063636267'
// }

// const object2 = object1;
// object2.age = 32;
// console.log(object2);

//spret

// const fruits = {
//     first: 'banana',
//     second: 'apple',
//     third: 'pineapple'
// };

// const fruits = ['banana', 'apple', 'pineapple']

// console.log(fruits.sort());

// const expandedFruit = {...fruits, fourth: 'orange'};

// console.log('expandedFruit', expandedFruit); //  output: тільки orange

// const getAllFruits = () => {
//     console.log(fruits.first);
// }

// getAllFruits();


// const sortArray = (array) => {
//     for (let j = 0; j < array.length -1 ; j++) {
//         for (let i = 0; i < array.length -1; i++) {
//             if(array[i] > array[i + 1]) {
//                 let t = array[i];
//                 array[i] = array[i+1];
//                 array[i+1] = t;
//             }
//         }
//         console.log('end: ',array);
//     }
// }

// const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// let sortedArr = []; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// console.log('start: ', arr);

// // console.log(sortArray(arr));

// people[
//     {
//         name
//         age
//         isDeveloper
//         lang : [en,ua,de,pl]
//         posada :junior, middle, senior
//     }
// ]


// 4 fields:
// name
// age
// isDeveloper (checkbox)
// [en,ua,de,pl]
// posada :junior, middle, senior


// Самостійно заповнюємо масив об'єктами

// Кнопка сорт: Сортує людей за віком наприклад > 25 і видає результат у innerHTML
// Кнопка сорт2: Сортує людей за посадою наприклад junior i видає результат у innerHTML
// Кнопка сорт3: Сортує людей за віком наприклад > 25 і видає результат у innerHTML


const result = [1, 2, 3];

const foo = () => {
    let arr = result.filter(person => person.age >= 25);
    console.log(arr);
}
foo();
// document.getElementById('result').innerHTML = result;
