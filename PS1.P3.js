// This function takes as input a string and a function and 
// returns the result of the function executed on the passed string
const funct = (string, decorator) => {
    return decorator(string)
};

// Expression 1
const expression1 = funct("supercalifragilisticexpialidocious", (splitFunct) => { 
    return splitFunct.split((/(?=c)/g));
} );

// Expression 2 
const expression2 = funct("supercalifragilisticexpialidocious", (replaceFunct) => {
    const newString = replaceFunct.replace(/a/g, "A");
    const len = newString.length;
    count = 0 
    for (i=0; i<len; i++){
        if (newString[i]=="A"){
            count++
        }
    }
    // console.log(count)
    // console.log(replaceFunct) 
    // console.log(newString) 
    return {
        originalString: replaceFunct, 
        modifiedString: newString, 
        numberReplaced: count,
        length: len
    };
} )

// This prints the results of expression1, should return ['super', 'califragilisti', 'cexpialido', 'cious']
console.log(expression1)

// This prints the results of expression2, should return: 
//  {
//      originalString: supercalifragilisticexpialidocious,
//      modifiedString: supercAlifrAgilisticexpiAlidocious,
//      numberReplaced: 3,
//      length:		 	34,
// }
console.table(expression2) 