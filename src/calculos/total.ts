/**
 * Calcula el total final sumando el subtotal y el IVA
 * @param subtotal El subtotal de la compra
 * @param iva El valor del IVA calculado
 * @returns El total final a pagar
 */
export function calcularTotal(subtotal: number, iva: number): number{
    return subtotal + iva;
}