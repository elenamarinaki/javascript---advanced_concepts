function jsengine(code) {
  return code.split(/\s+/);
}

console.log(jsengine('var a = 5'));

// inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}
const userData = {
  firstName: 'Jon',
  lastName: 'Don',
};
// findUser(userData) => `found Jon Don` ---> INLINE CACHING!

// hidden classes
function Point(x, y) {
  this.x = x;
  this.y = y;
}

var obj1 = new Point(1, 2);
var obj2 = new Point(3, 4);

obj1.a = 5;
obj1.b = 10;

// writing in different order is going to slower the compiler down
obj2.b = 10;
obj2.a = 5;

// Web APIs
console.log('1');
setTimeout(() => {
  console.log('2'), 1000;
});
console.log('3');
