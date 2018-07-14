define([], 
    function() { 
        // ========= Public methods
        function module1Func() {
            console.log('Executed from module1Func()');
        }

        // ========= Exported methods
        return {         
            module1Func: module1Func,
        } 
    }); 