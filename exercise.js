/* Instrucctions *
    Flatten an array.

    You will receive an array with multiple levels.

    Must return the array with only a single level



*/
/** DO NOT CHANGE THE FUNCTION NAME **/
const flatten = (arr) => {
    /* Only make changes below this comment */

        // Si el arreglo está vacío, devolvemos un arreglo vacío
        if (arr.length === 0) return [];

        // Usamos reduce para "aplanar" el arreglo
        return arr.reduce((acc, val) => {
            // Verificamos si el elemento es un arreglo
            // Si es un arreglo, llamamos a flatten recursivamente
            // Si no, lo agregamos directamente al acumulador
            return acc.concat(Array.isArray(val) ? flatten(val) : val);
        }, []);

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.flatten = flatten;