define(['./module1', './module3'], 
    function(module1, module3) { 
        // ========= Public methods
        function module2Func() {
            console.log('Executed from module2Func()');

            module1.module1Func();
            module3.module3Func();
        }

        // ========= Exported methods
        return {         
            module2Func: module2Func,
        } 
    }); 