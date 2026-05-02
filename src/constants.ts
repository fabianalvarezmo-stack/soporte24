export interface Product {
  id: string;
  name: string;
  category: 'Notebook' | 'Computador' | 'Apple' | 'Pantalla' | 'Impresora' | 'Proyector';
  description: string;
  image?: string;
}

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Notebook HP 240 Core i3', category: 'Notebook', description: 'Core i3 7 Gen' },
  { id: '2', name: 'Notebook Dell Core i3', category: 'Notebook', description: 'Core i3 1005G1 3.40GHz' },
  { id: '3', name: 'Notebook Dell Core i5', category: 'Notebook', description: 'Core i5' },
  { id: '4', name: 'Notebook Dell Gamer', category: 'Notebook', description: 'Core i7 10th' },
  { id: '5', name: 'Notebook HP 240 Core i5', category: 'Notebook', description: 'Core i5 8 Gen' },
  { id: '6', name: 'Notebook HP 348 G7', category: 'Notebook', description: 'Core i5 10th' },
  { id: '7', name: 'Notebook HP Probook', category: 'Notebook', description: '440 G8 Core i5-Core i7' },
  { id: '8', name: 'Notebook Lenovo ThinkPad i5', category: 'Notebook', description: 'Quad Core' },
  { id: '9', name: 'Notebook Lenovo ThinkPad i7', category: 'Notebook', description: 'Quad Core' },
  { id: '10', name: 'Computador Core i3', category: 'Computador', description: 'Pentium/i3 variants' },
  { id: '11', name: 'Computador Core i7', category: 'Computador', description: 'High Performance' },
  { id: '12', name: 'Computador Dual Core', category: 'Computador', description: 'Basic Computing' },
  { id: '13', name: 'Computador Gamer', category: 'Computador', description: 'Dedicated Graphics' },
  { id: '14', name: 'iMac 27', category: 'Apple', description: '27.5 Pulgadas Core i5' },
  { id: '15', name: 'MacBook Pro', category: 'Apple', description: 'Macbook Pro 15' },
  { id: '16', name: 'Pantalla LED', category: 'Pantalla', description: 'TV 55"' },
  { id: '17', name: 'Video Wall', category: 'Pantalla', description: 'Arriendo Pantalla Video Wall' },
  { id: '18', name: 'Impresora', category: 'Impresora', description: 'Multifuncional' },
  { id: '19', name: 'Proyector Viewsonic', category: 'Proyector', description: '5200 Lumenes' },
  { id: '20', name: 'Proyector Epson', category: 'Proyector', description: '2700 Lumenes' },
];

export const CATEGORIES = [
  { label: 'Todos', value: 'all' },
  { label: 'Notebooks', value: 'Notebook' },
  { label: 'Computadores', value: 'Computador' },
  { label: 'Apple', value: 'Apple' },
  { label: 'Pantallas', value: 'Pantalla' },
  { label: 'Impresoras', value: 'Impresora' },
  { label: 'Proyectores', value: 'Proyector' },
];
