/**
 * calcula el iva apartir del subtotal y una tasa de impuestos
 * @param subtotal EL total de la compra
 * @param tasa La tasa del IVA en porcentaje (ejemplo: 12 para 12%)
 * @return El valor del IVA a pagar
 */
export function calcularIVA(subtotal: number, tasa: number): number{
    return subtotal * (tasa/100);
}