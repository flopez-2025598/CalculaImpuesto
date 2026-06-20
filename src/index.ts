import { calcularSubtotal } from "./calculos/subtotal";
import { calcularIVA } from "./calculos/iva";
import { calcularTotal } from "./calculos/total";
import * as readline from "readline-sync";

//Calculadora de impuestos para compras
console .log("-CALCULADORA DE IMPUESTOS-")

const cantidad: number = readline.questionInt("Ingrese la cantidad de productos que desea comprar: ");
const precios: number[] = [];

for (let i = 1; i <= cantidad; i++) {
    const precio: number = readline.questionFloat(`Ingrese el precio del producto ${i}: Q `);
    precios.push(precio);
}

const subtotal: number = calcularSubtotal(precios);
const iva: number = calcularIVA(subtotal, 12);
const total: number = calcularTotal(subtotal, iva);

console.log("\n─ Resultado de su compra -");
console.log(`Subtotal: Q ${subtotal.toFixed(2)}`);
console.log(`IVA (12%): Q ${iva.toFixed(2)}`);
console.log(`Total:    Q ${total.toFixed(2)}`);

console.log("\n─ Pruebas-");

//1: Compra de útiles escolares
const precios1: number[] = [150, 75, 200, 50, 125];
const subtotal1: number = calcularSubtotal(precios1);
const iva1: number = calcularIVA(subtotal1, 12);
const total1: number = calcularTotal(subtotal1, iva1);

console.log("\nPRUEBA 1: Útiles escolares");
console.log(`Subtotal: Q ${subtotal1.toFixed(2)}`);
console.log(`IVA (12%): Q ${iva1.toFixed(2)}`);
console.log(`Total:    Q ${total1.toFixed(2)}`);

// 2: Compra de supermercado
const precios2: number[] = [89.90, 45.50, 120, 33.75];
const subtotal2: number = calcularSubtotal(precios2);
const iva2: number = calcularIVA(subtotal2, 12);
const total2: number = calcularTotal(subtotal2, iva2);

console.log("\nPRUEBA 2: Supermercado");
console.log(`Subtotal: Q ${subtotal2.toFixed(2)}`);
console.log(`IVA (12%): Q ${iva2.toFixed(2)}`);
console.log(`Total:    Q ${total2.toFixed(2)}`);

//3: Compra de tecnología
const precios3: number[] = [2500, 899.99, 350];
const subtotal3: number = calcularSubtotal(precios3);
const iva3: number = calcularIVA(subtotal3, 12);
const total3: number = calcularTotal(subtotal3, iva3);

console.log("\nPRUEBA 3: Tecnología ");
console.log(`Subtotal: Q ${subtotal3.toFixed(2)}`);
console.log(`IVA (12%): Q ${iva3.toFixed(2)}`);
console.log(`Total:    Q ${total3.toFixed(2)}`);