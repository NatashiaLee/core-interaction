// CONSOLE
console.log("hello world"); //statement
console.log('');

// STRINGS
console.log('Strings -');
console.log('I wan\'t a smoothie!');
console.log(':P ' + ':O');

console.log('');

//NUMBERS
console.log('Numbers-');
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 * 8);
console.log(8 / 8);
console.log(8 % 8);

console.log('');

//STRINGS & NUMBERS
console.log('Strings & Numbers -');

console.log('8 * 8');
console.log('8 * 8' + 8);
console.log('I am' + (8 * 8) + 'yrs old');
console.log('8 * 8:', 8 * 8);

console.log('');

//BOOLEANS
console.log('Booleans -');
console.log(true, false);
console.log('3 > 4', 3 > 4); //comparisons
console.log('2 <= 2', 2 <= 2);
console.log('2 > 1 && 2 < 12:', 2 > 1 && 2 < 12); // 'AND' operator
console.log('5 > 12 || 6 <= 18:', 5 > 12 || 6<= 18); //'OR' operator

console.log('');

//THREE BASIC TYPES
console.log('Basic Types-');

console.log(typeof'hello', typeof (8-7), typeof(2<1));

console.log('');

//VARIABLES
console.log('Variables -');

var five = 5;
console.log('five:', five);
var ten = 10;

console.log('five + ten', five + ten);
console.log('five * ten', five * ten);

//ALTERING VARIALBES
console.log('Altering Variables -');

var myStudentDebt = 800;
console.log('myStudentDebt:', myStudentDebt)
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt -= 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt += 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt++; //+1
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt--; //+1
console.log('myStudentDebt:', myStudentDebt);

console.log('');

//ARRAY
console.log('Arrays -');

var myLuckyNumbers = [3, 7, 8, 14, 21];
console.log('myLuckyNumbers:', myLuckyNumbers);
console.log(myLuckyNumbers[1]);

console.log('');

//Arrays
console.log('Objects -');

var me = {
  name: 'Bryant',
  age: 27,
  nativeNewYorker: false
};

console.log('me:', me);
console.log("me['name']:", me['name']);
console.log('me.name', me.name)

console.log();

//FUNCTIONS
console.log('Functions -');

var sayHi = function() {
    console.log('hi!')
};

console.log('sayHi():');
sayHi();

var saySomeMessage = function(message) {
    console.log(message);
};

console.log('saySomeMessage(\'hello\'):');
saySomeMessage('hello');
saySomeMessage('goodbye');

var addNumbers = function(num1, num2) {
  return num1 + num2
}

console.log(addNumbers(8,12));

var squareNumbers = function square(num) {
  return num * num;
}

console.log(squareNumbers(2));

//function squared (number) {}

var me = {
  name: 'Johnny',
  age: 83,
  nativeNewYorker: true
};

console.log('me:', me);

var squared = function (number) {
  return number * number
};

var describeMe = function (me) {
  return me.name + '!!!!'
};

var describeMe = function (me) {
  return 'My name is' + me.name + '! I am' + me.age + 'yrs old. If you asked me if I am a native New Yorker, my response would be: ' + me.nativeNewYorker
};

var Natashia = {
  name: 'Natashia',
  age: 19,
  nativeNewYorker: false
}

console.log('');

//CONDITIONSL STATEMENTS
console.log('Conditional Statements-')

if(me.age > 21) {
  console.log('party time')
} else if (me.age < 5)
    console.log('why are you here')
 else {
  console.log('not quite yet')
}

console.log('');

//loop
console.log('Loops-')
var hamburgers = 0;
for (var i = 0; hamburgers < 10; i++) {
  console.log(hamburgers + 'hamburger(s)');
  hamburgers++;
}

for (var i=0; i<5; i++) {
      console.log(i);
}

console.log('how many licks does it take to get to the center of a tootsie pop?')

for (var licks = 1; licks <=4; licks++) {
  console.log(licks)
}

if (licks == 4) {
    console.log('CRUNCH!!!')
} else {
    console.log(licks)
}
}
