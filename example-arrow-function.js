// var names = ['anh', 'le', 'jane', 'quynh'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// //ES6: dung arrow
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//   console.log('something else');
// });
//
// names.forEach((name) => console.log(name)); //bất kỳ câu lệnh nào chạy ở đây cũng là return

var returnMe = (name) => name + "!";
console.log(returnMe("Anh Le")); //whatever you define will be automatically get returned

/* sự khác biệt giữa arrow function và anonymous function
  - Anonymous functions have a this binding
  - Arrow function take on their parents this binding
*/
var names = ['anh', 'le', 'jane', 'quynh'];
var Person = {
  name: "Anh Le",
  greet: function(){
      names.forEach(function(name){
        console.log(this.name + " says hi to " + name);
      });
  },

  greet2: function(){
    names.forEach((name) => console.log(this.name + " says hi to " + name));
  }
};
Person.greet();
/* result:
undefinedsays hi to anh
undefinedsays hi to le
undefinedsays hi to jane
undefinedsays hi to quynh

-> nguyên nhân do dùng "this" như trên, nó sẽ không refer đến identity của Person object nữa, vì nó đang ở trong 1 anonymous function
-> dùng arrow function như ở greet2() để fix cái này vì arrow function không upate this keyword
*/
Person.greet2();

//challege
  //addStatement
  var addStatement = (a, b) => {return a + b;};
  console.log(addStatement(2, 3));

  //addExpression
  var addExpression = (a, b) => a + b;
  console.log(addExpression(4, 10));
