/**
 * Estructura de navegación principal del sitio.
 * Diseñada para ser clara, escalable y visualmente atractiva,
 * alineada con la experiencia de usuario de WhatsApp:
 * - "Stay updated on topics you care about"
 * - "Group messaging made easy"
 * - "Share photos, videos, voice notes on Status"
 * - "Get help with anything"
 * - "Chat on WhatsApp"
 */

const navLinks = [
  {
    name: 'HOMBRE',
    path: '/hombre',
    image: '/PortadaNavbar/HOMBRE.webp',
    imageAlt: 'Colección para hombre',
    subcategories: [
      {
        name: 'CALZADOS',
        path: '/hombre/calzados',
        image: '/PortadaNavbar/calzado2_1.webp',
        imageAlt: 'Zapatos para hombre',
        featured: false,
      },
      {
        name: 'ROPA',
        path: '/hombre/ropa',
        image: '/PortadaNavbar/ropa2_1.webp',
        imageAlt: 'Ropa para hombre',
        featured: false,
      },
      {
        name: 'ACCESORIOS',
        path: '/hombre/accesorios',
        image: '/PortadaNavbar/accesorios2_1.webp',
        imageAlt: 'Accesorios para hombre',
        featured: false,
      },
      {
        name: 'TECNOLOGÍA',
        path: '/hombre/tecnologia',
        image: '/PortadaNavbar/BANNER_TECNOLOGIA_1_.webp',
        imageAlt: 'Tecnología para hombre',
        featured: true, // Destacado
      },
    ],
  },
  {
    name: 'MUJER',
    path: '/mujer',
    image: '/PortadaNavbar/MUJER.webp',
    imageAlt: 'Colección para mujer',
    subcategories: [
      {
        name: 'CALZADOS',
        path: '/mujer/calzados',
        image: '/PortadaNavbar/BANNER_CALZADO.webp',
        imageAlt: 'Zapatos para mujer',
        children: [
          {
            name: 'NIKE AIR',
            path: '/mujer/calzados/nike',
            image: '/PortadaNavbar/LogoMarca/LOGOS__NIKE_239x90.webp',
            imageAlt: 'Colección Nike Air para mujer',
            badge: 'Nuevo', // Etiqueta visual
          }
        ],
      },
      {
        name: 'CUIDADO PARA ELLAS',
        path: '/mujer/cuidado_para_ellas',
        image: '/PortadaNavbar/Cuidado_para_ellas/portada.png',
        imageAlt: 'Cuidado personal para mujer',
        children: [
          {
            name: 'CUIDADO DE LA PIEL',
            path: '/mujer/cuidado_de_la_piel',
            image: '/PortadaNavbar/D0964509-LNCM-3.webp',
            imageAlt: 'Productos para el cuidado de la piel',
            children: [
              {
                name: 'LANCOME',
                path: '/lancome',
                image: '/PortadaNavbar/Cuidado_para_ellas/lancome/lancome.png',
                imageAlt: 'Productos Lancôme',
                badge: 'Premium',
                description: 'Lujo y eficacia en cada producto',
              }
            ]
          }
        ]
      },
      {
        name: 'ESTILO Y MODA',
        path: '/mujer/estilo',
        image: '/PortadaNavbar/MUJER_ESTILO.webp',
        imageAlt: 'Moda y estilo para mujer',
        featured: true,
        description: 'Descubre las últimas tendencias'
      }
    ],
  },
  {
    name: 'CONTACTO',
    path: '/contacto',
    image: '/PortadaNavbar/CONTACTO.webp',
    imageAlt: 'Chatea con nosotros en WhatsApp',
    badge: 'Chat ahora',
    description: 'Soporte rápido y seguro',
    external: false,
    action: {
      type: 'navigate',
      label: 'Habla con un agente',
      icon: 'WhatsApp',
      url: 'https://wa.me/50664541700',
      message: 'Hola, estoy visitando la tienda JACANA y necesito ayuda.'
    }
  }
];

export default navLinks;