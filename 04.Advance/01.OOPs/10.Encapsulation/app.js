// In JavaScript, we can achieve encapsulation by using closures to create private members.

function Counter() {
  let _count = 0; //private variable

  //public methods that can access and modify the private variable

  this.increment = function () {
    _count++;
  };

  this.decrement = function () {
    _count--;
  };

  this.getCount = function () {
    return _count;
  };
}

const counter = new Counter();
console.log(counter.getCount());

//inc
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

//dec
console.log(counter.decrement());

console.log(counter.getCount());
