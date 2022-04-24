function Person(name){
  this.name = name;
}


Person.prototype.printStat = function(){
  // console.log(this.name);
}

function Teacher (name, sub){
  Person.call(this, name);
  this.sub = sub;
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.printSub = function(){
  console.log(this.name +" is now teaching " +this.sub);
};

const t =new Teacher('Deepak', 'Maths');

console.log(t);
t.printSub();
t.printStat();
