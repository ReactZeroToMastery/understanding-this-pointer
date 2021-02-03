console.clear();
//UNDERSTANDING "this" Pointer

//Constructor Function
function ObjectClass() {
  this.print = function() {
    console.log("%c Inside Constructor Func method", "color:cyan");
    console.log(this); // classObj

    print();
    printA();
  };
}

let classObj = new ObjectClass();

//Arrow Function
printA = () => {
  console.log("%c Inside Normal Func", "color:red");
  console.log(this);
};

//Normal Function
function print() {
  console.log("%c Inside Normal Func", "color:green");
  console.log(this);
}

//Object
let normalObj = {
  print: function() {
    console.log("%c Inside Object Normal Func", "color:green");
    console.log(this);
  },
  printA: () => {
    console.log("%c Inside Object Arrow Func", "color:red");
    console.log(this);
  }
};




//Global Scope
console.log("Global Scope This ");
console.log(this);

//Normal Function call
print();

//Arrow Function call
printA();

//Normal function bound to classObj
print.bind(classObj)();

//Normal function bound to normalObj
print.bind(normalObj)();

//Class method call
classObj.print();

normalObj.print();
normalObj.printA();
