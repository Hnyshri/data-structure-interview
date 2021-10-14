Hoisting
    - Hoisting is javascript's default behavior of moving declaration to top
    - var is Hoisted... let is not Hoisted

DOM 
    - Document  => Html Document
    - Object    => Element Like html tag (ex h1,p,span etc)
    - Model     => Complete Document


 - Everything in javascript happen inside an Execution Context. And Execution context is manage by
   Call Stack
 - Javascript is synchronous Single threaded language.

    - Memory Component / Variable Enviroment / Memory Execution Case
    - Code Component / Thread of Execution / Code Execution Case

ex-    var n =2;
       function square (num){
           var ans = num * num;
           return ans;
       }
       var square1 = square(n);
       var square2 = square(4);


Phase 1 (Memory Execution)=>             // Global Execution context in  Call Stack (First in last out)

    declear variable --- n : undefine
                        function square:{ ... }
                        square1 : undefine
                        square2 : undefine

Phase 2 (code Execution)=>

            n:2
            function square (num){} // create the Local Execution context and after complete the work.
                                    // it will destory the Execution context
            square1 = 4;   // value replace by undefine
            
            function square (num){} // create the Local Execution context and after complete the work.
                                    // it will destory the Execution context
            square1 = 16;  // value replace by undefine

            when function is envoke then Execution context created again

Phase 3 - destory the global Execution context and call stack
