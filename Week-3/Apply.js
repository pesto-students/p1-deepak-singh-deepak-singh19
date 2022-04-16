function friends(city , country) {

    var para=[this.a ,
              " knows ",
              this.b,
             " very vell and they both live in "+city +" which is in "+ country
             ].join(' ');
    console.log(para);

}

    var obj={ a: 'Deepak', b: 'Raghav'};



friends.apply(obj,["Rewa","India" ]);

friends.call(obj,"Rewa","India" );

var obj1={ a: 'Mehak', b: 'Aveen'};
friends.apply(obj1,["Haryana","India" ]);

friends.call(obj1,"Haryana","India" );

// Difference Betwwen Call and Apply
