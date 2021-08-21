//-------------------------indexOf---------------------------
//includes возвращает либо True либо False. Т.е. есть элемент в массиве или нет . В отличие от indexOf, который возвращает -1 если елемента нет или индекс на котором находиться искомый элементю.
//includes не говорит сколько раз элемент встречается
//includes зависит от типа данных и регистра
//Есть второй необязательный праметр, с которого начинать поиск. Позиция работает Включительно
console.group('IndexOf');
const test = [11, 111, 22, 222, 'No'];
if (test.includes(232)) {
  console.log('yes');
} else {
  console.log('no');
}

//В одну строку
let yesNo = test.includes(22, 3) ? 'yes2' : 'no2';
console.log(yesNo);

const trans = ['hgbjf55', 'jjfgf444', '44435gjgn', 'dffgfg589', 'dddd555'];

let bancTrans = trans.includes('hgbj55') ? 'Found' : 'Not found';
console.log(bancTrans);


//Работа со сторкой. Можно проводить поиски символа в строке
const strInc = 'Есть такой символ!'
let isStrIncludes = strInc.includes('!') ? 'Found !' : 'Not found !';
console.log(isStrIncludes);

//Работа с массивом объектов
const usersIncludes = [
  { 'name': 'Ivanov', 'age': 44 },
  { 'name': 'Petrov', 'age': 24 }
]
//Печатю только букму 'I' в строке поиска и в массив попадает только объекты с этими буквами. Но это делается также регулярными выражениями
let newUsersInc = usersIncludes.filter(item => {
  return item.name.includes('ov');
})
console.log(newUsersInc);
console.groupEnd();

//---------------MAP---------------
console.group('Method MAP');
//Служит для того, чтобы переберать массивы
const temp = [0, 4, 5, 9, 7, 6, 4, 22, 45, 9, -1, -2, -3];//C F = C * 1.8 + 32
//метод MAP создает новый массив и применяет к нему какие-то действия
//Метод MAP принимает функцию, которая поочереди обрабатывет каждый элемент

let tF = temp.map(item => {
  console.log(item);
  return 10 + item * 1.8 // В новом массиве будет то что написано после return. Потому, что функция Callback должна что-то вернуть.
})

console.log(tF);
//В MAP кроме функции колбека можно передать индекс массива и сам массив и можно указывать контекст выполнения this
let a = [33, 44, 55];
let b = a.map((item, index, array) => {
  if (index == 2) {
    array[index + 1] = 66;
  }
  return item;
})

console.log(b);
console.log(a);

const base = [
  { "name": 'Ivan', 'order': 12, 'sum': '125.3' },
  { "name": ' serg', 'order': 102, 'sum': '1251.3' },
  { "name": ' Lena Sedova', 'order': 202, 'sum': '1125.3' },
]

const newBase = base.map(item => {
  item.name = item.name.trim().toLocaleLowerCase();
  return item;
})

console.log(newBase);
console.groupEnd();

//----------------------PUSH---------------------------------------------
//Добавляет элементы в конец массива
console.group('Method PUSH');
let mapA = [99, 88];
console.log(mapA);
mapA[mapA.length] = 111;
console.log(mapA);
mapA.push(44);
console.log(mapA);
//можно добавить несколько элементов
mapA.push(448, 555);
console.log(mapA);
//push может вернуть новую длину массива
console.log(mapA.push());

function hi(b) {
  return mapA.push(b);
}
console.log(hi(88)); // возвращает длину массива, при этом не добавляя элемент
hi(88);
console.groupEnd();
//--------------------------------POP---------------------
console.group('Method POP');
//Метод pop удаляет последний элемент в массиве
mapA.pop();
console.log(mapA);
console.log(mapA.pop())//Возвращает последний удаленный элемент
//Когда pop удалил все элементы он возвразает undefined
const car = [];
document.querySelector('.add').onclick = () => {
  let id = document.querySelector('#goods').value;
  if (!car.includes(id)) {
    car.push(id);
  }
  console.log(car);
}

document.querySelector('.pop').onclick = () => {
  let id = document.querySelector('#goods').value;
  let goods = car.pop();
  console.log('Товар id' + goods + ' был удален');
  console.log(car);
}
console.groupEnd();
//----------------------------Filter--------------------------------
console.group('Method FILTER');
const filterArray = [3, 4, 5, 6, 9, 8, 55, 66];
//Фильтрация исходного массива. В результате работы мы получаем новый массив, прошедший по определнному условию
// В переменную item попадает каждый элемент по очереди. Если функция Callback возвращает true, то элемент проходит в новый массив
let newFilterArray = filterArray.filter((item, index) => {
  if (item > 8) {
    return true; //Именно true, а не item; После return JS трактует все true или False
  }
})
console.log(newFilterArray);
//Второй параметр (не обязательный) это index элемента. Третий параметр - сам исходный массив

const clients = [
  { "lin": "fgfg0rths0d55", "user": "Ivanov", "debt": 4 },
  { "lin": "fgfg0rths0d158", "user": "Vanov", "debt": 80 },
  { "lin": "fgfg0rths0d", "user": "Sivanov", "debt": 40 },
  { "lin": "fgfg0rt", "user": "Nov", "debt": 145 },
];

// let debts = clients.filter(item => (item.debt > 10)).sort((a, b) => (b.debt - a.debt));
// console.log(debts);
//Тоже самое только в две строки
let debts = clients
  .filter(item => (item.debt > 10))
  .sort((a, b) => (b.debt - a.debt));
console.log(debts);