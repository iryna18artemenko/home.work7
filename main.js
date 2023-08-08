function program () {


    function getNumericValue (queryString, titleString = "") {

        let itFirstRequest = true, value; 
        
        do {
            value = prompt (((queryString && titleString) ? titleString +"\n" : + " " ) + queryString);
            itFirstRequest = false;  
        } while ( (!value || isNaN (value)) && value !== null);

         return value === null ? value : + value;
    }
    

    function squerEquation (a, b, c, invalidCallBack) {

        if (a === 0) {
            if (typeof invalidCallBack === "function")  invalidCallBack();
            return null;
        }


        const d = b * b - 4 * a * c;
        if (d < 0) {
            return {
                d: -D,
                x1: null,
                x2: null
            };
        } else  {
            sqrtD = Math.sqrt(d);
            x1 = (-b + sqrtD) / (2 * a);
            x2 = (-b - sqrtD) / (2 * a);
            
            return {

                d: d,
                x1: x1,
                x2: x2
            }
        }  
            
    }




    const a = getNumericValue("Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0","Введіть a", "");


    const b = getNumericValue("a=" + a + "\nВведіть b", "" );
   

    const c = getNumericValue("a=" + a + ", b =" + b + "\nВведіть c", "");
    

    const result = squerEquation(a, b, c, () => alert ("a = 0. Рівняння не має рішень") );
    if (result === null) {
        return;
    }


    if (result.d < 0) {
        alert (  "D < 0. Рівняння не має рішень");
        return;
    }


    if (result.d === 0 ? 
        `D = 0. Єдиний корень рівняння: ${x1}`:
        `D > 0. Корені рівняння: ${x2}`);


}

program ();