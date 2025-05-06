const navLinks = [
    { name: 'Inicio', path: '/' },
    {
        name: 'Categorías', path: '#',
        subLinks: [
            {
                name: 'Mujer', path: '#', 
                    subLinks: [
                        {
                            name: 'Ropa', path: '#',
                                subLinks: [
                                    { 
                                        name: 'Mañanitas', path: '#',
                                            subLinks: [
                                                {name: 'Catalogo', path: '/catalogomañanitas/catalogoMañanitas'}
                                            ]
                                    },
                                ]
                        },
                        {
                            name: 'Zapatos deportivos', path: '#',
                                subLinks: [
                                    {name: 'Nike', path: '/sportmujer'},
                                    {name: 'Adidas', path: '/adidas2'},
                                    {name: 'Tommy Hilfiger', path: '/tommy2'},
                                    {name: 'Puma', path: '/puma2'},
                                    {name: 'New Balance', path: '/newb2'},
                                    {name: 'Converse', path: '/converse2'},
                                    {name: 'Crocs', path: ''},
                                    {name: 'Vans', path: ''},
                                    {name: 'Fila', path: '/fila2'},
                                ]
                        },
                        {
                            name: 'Carteras', path: '#',
                                subLinks: [
                                    {name: 'H&Co', path: '/catalogo/HCO'},
                                    {name: 'Calvin Klein', path: '/catalogo/calvinklein'},
                                ]
                        }
                ]
            },
            { 
                name: 'Hombre', path: '#',
                    subLinks: [
                        {name: 'Ropa', path: '#'},
                        {name: 'Zapatos deportivos', path: '#',
                            subLinks: [
                                {name: 'Nike', path: '/deportivo'},
                                {name: 'Adidas', path: '/adidas'},
                                {name: 'Tommy Hilfiger', path: '/tommy'},
                                {name: 'Puma', path: '/puma'},
                                {name: 'New Balance', path: '/newb'},
                                {name: 'Converse', path: '/converse'},
                                {name: 'Crocs', path: ''},
                                {name: 'Vans', path: ''},
                            ]
                        },
                        {name: 'Gorras', path: '/gorra'},
                        {name: 'Sandalias', path: '/sandalias'},
                    ]
            },
            { name: 'Juvenil', path: '/juvenil' },
            { name: 'Niños', path: '/niño' },
            { name: 'Niñas', path: '/niña' },
        ],
    },
    { name: 'Sobre Nosotros', path: '' },
    { name: 'Contacto', path: '' },
];

export default navLinks;