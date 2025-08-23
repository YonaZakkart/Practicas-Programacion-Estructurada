// 2. Contador de vocales: función que recibe una cadena y devuelve el número 
// de vocales (a,e,i,o,u) que contiene. 

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("-Contador de vocales en una palabra o frase-")
rl.question("Ingrese una palabra o frase: \n", (phrase) => {
    const vowels = phrase.match(/[aeiou]/gi);
    const vowelsCount = vowels ? vowels.length : 0;
    console.log(`La cantidad de vocales en '${phrase}' es: ${vowelsCount}`);
    rl.close();
})