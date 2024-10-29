/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */
    let resultado = []; 
        const aplanar = (elemento) => {
            if (Array.isArray(elemento)) { 
                elemento.forEach(aplanar);
            } else {
                resultado.push(elemento);
            }
        };
        arr.forEach(aplanar);
        return resultado; 
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;