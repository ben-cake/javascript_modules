// ========= Public methods
function publicFuncModule2() { 
    console.log('Executed from module2.publicFuncModule2()');

    System.import('js/module3.js')
        .then(function(module3) {
            module3.publicFuncModule3();
        });
} 

// ========= Exported methods
module.exports = {
    publicFuncModule2: publicFuncModule2
};
