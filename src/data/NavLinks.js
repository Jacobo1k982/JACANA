import { CubeIcon, ShoppingBagIcon, TagIcon } from '@heroicons/react/24/outline';


const navLinks = [
    { name: 'Inicio', path: '/', icon: CubeIcon },
    {
        name: 'Categorías', path: '#', icon: ShoppingBagIcon,
        subLinks: [
            {
                name: 'Mujer', path: '#', icon: TagIcon,
                subLinks: [
                    { name: 'Belleza', path: '/belleza', icon: TagIcon,

                    },
                    {   
                        name: 'Ropa', path: '#', icon: TagIcon,
                        subLinks: [
                            {
                                name: 'Mañanitas', path: '#', icon: TagIcon,
                                subLinks: [
                                    { name: 'Catálogo', path: '/catalogomañanitas/catalogoMañanitas', icon: TagIcon }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Zapatos deportivos', path: '#', icon: ShoppingBagIcon,
                        subLinks: [
                            { name: 'Nike', path: '/Nike-mujer', icon: ShoppingBagIcon },
                            { name: 'Adidas', path: '/adidas2', icon: ShoppingBagIcon },
                            { name: 'Tommy Hilfiger', path: '/tommy2', icon: ShoppingBagIcon },
                            { name: 'Puma', path: '/puma2', icon: ShoppingBagIcon },
                            { name: 'New Balance', path: '/newb2', icon: ShoppingBagIcon },
                            { name: 'Converse', path: '/converse2', icon: ShoppingBagIcon },
                            { name: 'Crocs', path: '', icon: ShoppingBagIcon },
                            { name: 'Vans', path: '/vans-mujer', icon: ShoppingBagIcon },
                            { name: 'Fila', path: '/fila2', icon: ShoppingBagIcon },
                        ]
                    },
                    {
                        name: 'Carteras', path: '#', icon: ShoppingBagIcon,
                        subLinks: [
                            { name: 'H&Co', path: '/catalogo/HCO', icon: ShoppingBagIcon },
                            { name: 'Calvin Klein', path: '/catalogo/calvinklein', icon: ShoppingBagIcon },
                        ]
                    }
                ]
            },
            {
                name: 'Hombre', path: '#', icon: TagIcon,
                subLinks: [
                    { name: 'Ropa', path: '#', icon: TagIcon },
                    {
                        name: 'Zapatos deportivos', path: '#', icon: ShoppingBagIcon,
                        subLinks: [
                            { name: 'Nike', path: '/deportivo', icon: ShoppingBagIcon },
                            { name: 'Adidas', path: '/adidas', icon: ShoppingBagIcon },
                            { name: 'Tommy Hilfiger', path: '/tommy', icon: ShoppingBagIcon },
                            { name: 'Puma', path: '/puma', icon: ShoppingBagIcon },
                            { name: 'New Balance', path: '/newb', icon: ShoppingBagIcon },
                            { name: 'Converse', path: '/converse', icon: ShoppingBagIcon },
                            { name: 'Crocs', path: '', icon: ShoppingBagIcon },
                            { name: 'Vans', path: '/vans-hombre', icon: ShoppingBagIcon },
                        ]
                    },
                    { name: 'Gorras', path: '/gorra', icon: ShoppingBagIcon },
                    { name: 'Sandalias', path: '/sandalias', icon: ShoppingBagIcon },
                ]
            },
            { name: 'Juvenil', path: '/juvenil', icon: CubeIcon },
            { name: 'Niños', path: '/niño', icon: CubeIcon },
            { name: 'Niñas', path: '/niña', icon: CubeIcon },
        ]
    },
    { name: 'Sobre Nosotros', path: '', icon: CubeIcon },
    { name: 'Contacto', path: '/contacto', icon: CubeIcon },
];

export default navLinks;
