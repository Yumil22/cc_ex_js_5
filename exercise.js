/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            acc.push(...flatten(curr));
        } else {
            acc.push(curr);
        }
        return acc;
    }, []);
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;