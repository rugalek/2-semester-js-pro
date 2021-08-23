///////////////1//////////////

let arr = [1,3,5,7,8,0]
let arrSqr = arr.map(i => i**2);

/////////////////2//////////////

let arr = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
let arrSum = arr.reduce((acc, curr) => acc + curr);

///////////////3//////////////

let num = 1994776444499;

let arr = String(num).split("").map((num)=>{
    return Number(num)
  })
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 !=0 && arr[i + 1] % 2 !=0 ) {
     arr[i] += ':';
    } 
}
let result = arr.join('');

///////////////4//////////////

let arr1 = [1,3,5,6,7,9]
let arr2 = [2,3,5,6,4]

function arrSum(arr1, arr2) {
    let resArr = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        resArr.push((a[i] || 0) + (b[i] || 0));
    }
    return resArr
}

///////////////5//////////////

let arr1 = [1,3,5,6,7,9]
let arr2 = [2,3,5,6,4]

function arrSubtr(a, b) {
    let resArr = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        resArr.push((a[i] || 0) - (b[i] || 0));
    }
    return resArr
}
console.log(a);
console.log(b);
console.log(arrSubtr(a,b));

///////////////6//////////////

let arr = [1,3,5,6,7,9];
let reversedArr = arr.reverse();
console.log(reversedArr);

///////////////7//////////////

let arr = [
    {name: 'Ivan', age: 18},
     {name: 'Petr', age: 12},
      {name: 'Sidor', age: 25},
        {name: 'Vasya', age: 14},
          {name: 'Grego', age: 19}
        ];
let arr18 = [];
let arrBefore18 = [];
arr.forEach(person => {
    if (person.age >= 18) {
        arr18.push(person);
    } else if (person.age < 18) {
        arrBefore18.push(person);
    }
});

console.log(arr18);
console.log(arrBefore18);

///////////////8//////////////

let arr = [1, 2, 3, 4, 5 ,6 ,7 ,8, 9, 1, 2, 3, 4, 5, 6];
let uno = Array.from(new Set(arr));

///////////////9//////////////

let string = 'шалаш';
function isPalidrome (word) {
    return word === word.split('').reverse().join('');
};

///////////////10//////////////





