//Q1
let nickname = "たけいし";
let age = 25;
console.log("私のニックネームは" + nickname + "です。年齢は" + age + "歳です。");

//Q2
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5
let sum = 0;

for (let i = 0; i < playerList.length; i++) {
  sum += playerList[i].age;
}
const avg = sum / playerList.length;
console.log(avg);


//Q6
function sayHello() {
  console.log("Hello");
}
sayHello();

let sayWorld = function() {
  console.log("World");
};

sayWorld();

//Q7
user['birthday'] = '2000-09-27';
user.sayHello = function(){
  console.log("Hello");
}
user.sayHello();

// Q8
let calc = {
  add: function(x, y) {
    return x + y;
  },

  subtract: function(x, y) {
    return x - y;
  },

  multiply: function(x, y) {
    return x * y;
  },

  divide: function(x, y) {
    return x / y;
  },

}

console.log(calc.add(5, 2)); 
console.log(calc.subtract(14, 4));
console.log(calc.multiply(7, 7));
console.log(calc.divide(25, 5));

// Q9
function remainder(x, y) {
  return x % y;
}

console.log('返り値は' + remainder(5, 3) + 'です');

//Q10 

//xは関数fooの中で定義されているので、外部からconsole.log参照しようとしても、fooのスコープの範囲外なので、未定義エラーが起こる。

//AD.Q1

console.log(Math.floor(Math.random() * 10));

//AD.Q2

setTimeout(() => {
    console.log('3秒経過しました');
}, 3000);

//AD.Q3

let num = 6000053123710;

if (num > 0) {
    console.log('num is greater than 0');
} else if (score < 0) {
    console.log('num is less than 0');
} else {
    console.log('num is 0');
}


//AD.Q4
let numbers = []; 

for(let i = 0; i < 100; i++){
  numbers[i] = i;
}

console.log(numbers);

//AD.Q5

let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i <= mixed.length ; i++ ){
  if (typeof mixed[i] === "number"){
    if(mixed[i] % 2 === 0){
      console.log('even');
    }else if (mixed[i] % 2 === 1){
      console.log('odd');
    }
  }else{
    console.log('not number');
  }
}