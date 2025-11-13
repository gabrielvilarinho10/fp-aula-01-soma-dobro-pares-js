/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    return numeros
        .filter(n => n % 2 === 0)   // seleciona apenas pares
        .map(n => n * 2)            // dobra cada valor
        .reduce((acum, val) => acum + val, 0); // soma tudo
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        const n = numeros[i];

        if (n % 2 === 0) { // verifica par
            soma += n * 2; // dobra e adiciona
        }
    }

    return soma;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
