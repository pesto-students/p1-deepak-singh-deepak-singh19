class Stack{
  constructor(){
    this.item=[];
  }

  push(ele){
    this.item.push(ele);
  }
  pop(){
    if(this.item.length==0){
      return "Stack is empty";
    }
    return this.item.pop();
  }

  printStack()
{
    var str = "";
    for (var i = 0; i < this.item.length; i++)
        str += this.item[i] + " ";
    return str;
}
}

var st = new Stack();

st.push(10);
st.push(20);
st.push(30);
st.push(11);
st.push(24);
st.pop();
st.push(32);
st.pop();
st.pop();

console.log(st.printStack());
