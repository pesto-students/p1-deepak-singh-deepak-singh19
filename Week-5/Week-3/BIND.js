var obj ={
    firstName:"Deepak",
    friends:['Mehak' , 'Tanisha'],

    loop: function(){
        this.friends.forEach(
            function(friends){
                console.log(this.firstName + ' Knows '+ friends);
            }.bind(this)
        );
    }


}

obj.loop();

// ANOTHER EXAMPLE
// var Stu={
//   a:10,
//   b:20,
//   sumX: function(a,b){
//   return this.a + this.b;
// }
// };
//
// // const dumb= Stu.sumX;
//
// // dumb();
//
// const dude=Stu.sumX.bind(Stu); // .bind will place the value prmanently a=10 and b=20
// // const dudeb = Stu.sumX.bind({a:100,b:20});
//
//
// dude();


// ANOTHER EXAMPLE
