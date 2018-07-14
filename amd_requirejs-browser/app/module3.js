define([], 
    function() { 
        // ========= Public methods
        function module3Func() {
            console.log('Executed from module3Func()');
        }

        // ========= Exported methods
        return {         
            module3Func: module3Func,
        } 
    }); 