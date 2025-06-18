const navLinks = [
  {
    name: 'HOMBRE',
    path: '/hombre',
    image: '/PortadaNavbar/HOMBRE.webp',
    subcategories: [
      { name: 'CALZADOS', path: '/hombre/calzados', image: '/PortadaNavbar/calzado2_1.webp' },
      { name: 'ROPA', path: '/hombre/ropa', image: '/PortadaNavbar/ropa2_1.webp' },
      { name: 'ACCESORIOS', path: '/hombre/accesorios', image: '/PortadaNavbar/accesorios2_1.webp' },
      { name: 'TECNOLOGÍA', path: '/hombre/tecnologia', image: '/PortadaNavbar/BANNER_TECNOLOGIA_1_.webp' },
    ],
  },
  {
    name: 'MUJER',
    path: '/mujer',
    image: '/PortadaNavbar/MUJER.webp',
    subcategories: [
      {
        name: 'CALZADOS',
        path: '/mujer/calzados',
        image: '/PortadaNavbar/BANNER_CALZADO.webp',
        children: [
          {
            name: 'NIKE AIR',
            path: '/mujer/calzados/nike',
            image: '/PortadaNavbar/LogoMarca/LOGOS__NIKE_239x90.webp'
          }
        ],
      },
      {
        name: 'CUIDADO PARA ELLAS',
        path: '/mujer/cuidado_para_ellas',
        image: '/PortadaNavbar/Cuidado_para_ellas/portada.png',
        children: [
          {
            name: 'CUIDADO DE LA PIEL',
            path: '/mujer/cuidado_de_la_piel',
            image: '/PortadaNavbar/D0964509-LNCM-3.webp',
            children: [
              {
                name: 'LANCOME',
                path: '/lancome',
                image: '/PortadaNavbar/Cuidado_para_ellas/lancome/lancome.png',
              }
            ]
          }
        ]
      }
    ],
  },
  // Más categorías si deseas
];

export default navLinks;
