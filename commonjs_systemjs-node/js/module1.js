var module2 = require('js/module2.js');

// ========= Private methods
function privateFunc() {
    console.log('Executed from module1.privateFunc()');
}

// ========= Public methods
function publicFuncModule1() { 
    privateFunc();
    console.log('Executed from module1.publicFuncModule1()');

    module2.publicFuncModule2();
}

// ========= Exported methods
module.exports = {
    publicFuncModule1: publicFuncModule1
};

