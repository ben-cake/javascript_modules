var module3 = require('js/module3.js');

// ========= Public methods
function publicFuncModule2() { 
    console.log('Executed from module2.publicFuncModule2()');

    module3.publicFuncModule3();
} 

// ========= Exported methods
module.exports = {
    publicFuncModule2: publicFuncModule2
};
