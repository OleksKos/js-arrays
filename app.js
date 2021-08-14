//indexOf
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