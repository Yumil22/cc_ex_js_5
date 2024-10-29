/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let flattArray = [];

    arr.forEach(element => {
        if(Array.isArray(element)){
            flattArray = flattArray.concat(flatten(element));
        }

        else{
            flattArray.push(element);
        }
    });

    return flattArray;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;