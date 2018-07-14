define(function(require) { 

    console.log('Executed from main');

    console.log('main: calling module1');
    var module1 = require('./module1');
    module1.module1Func();

    console.log('main: calling module2');
    var module2 = require('./module2');
    module2.module2Func();
    }); 