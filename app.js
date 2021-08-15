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

//---------------MAP---------------
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