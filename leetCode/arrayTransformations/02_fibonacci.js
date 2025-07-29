/*
suponha que queremos descobrir quais são os 20 primeiros números da sequência de Fibonacci. Os dois primeiros números da sequência são 1 e 2, e cada número subsequente é a soma dos
dois números anteriores:
*/

const fibonacci = []; 
fibonacci[1] = 1; 
fibonacci[2] = 1; 
for (let i = 3; i < 20; i++) {
fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
}
for (let i = 1; i < fibonacci.length; i++) 
console.log(fibonacci[i]); 
