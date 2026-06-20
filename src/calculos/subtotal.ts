/**Calcula el subtotal sumando todos los precios de los productos 
 * @param precios Arreglo de precios indivuduales de cada producto
 * @return El subtotal de la compra (Suma de todos los precios)
*/
export function calcularSubtotal(precios: number []): number {
    return precios.reduce((acumulado, precio) => acumulado + precio, 0);
}