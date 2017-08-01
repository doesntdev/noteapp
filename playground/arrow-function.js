
var square = x => x * x;
console.log(square(7))

var user = {
  name: 'Logan',
  sayHi: () => {
      console.log(`hi I'm ${user.name}`);
  },
  sayHiAlt () {}
};


user.sayHi();
