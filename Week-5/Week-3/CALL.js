function friends() {

    var para=[this.a ,
              " knows ",
              this.b,
             " very vell "
             ].join(' ');
    console.log(para);

}

    var obj={ a: 'Deepak', b: 'Raghav'};



friends.call(obj);

var obj1={ a: 'Mehak', b: 'Aveen'};
friends.call(obj1);
