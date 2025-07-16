export interface Producto {
    id: number;
    img: string;
    nombre: string;
    tipo: string;   //hamburguesa, papas, cajita feliz, bebida,...
    precio: number;
    unidad: number;
    stock: number;
    descuento: boolean;
    cantidad: number;
    dosXuno: boolean;
} 
