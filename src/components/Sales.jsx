// Sales.jsx
import React from 'react';
import Item from './utils/Item';
import Title from './utils/Title';
import Subtitle from './utils/Subtitle';

const Sales = ({ ifExists, endpoint: { title, items, subtitle } }) => {
  // Determinar clases de grid
  const gridClasses = ifExists
    ? 'grid-cols-1 xl:grid-cols-2 sm:grid-cols-1'
    : 'grid-cols-1 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1';

  // Si no hay productos, mostrar mensaje
  if (!items || items.length === 0) {
    return (
      <div className="nike-container py-12 text-center">
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
        <p className="text-gray-500 dark:text-gray-400 mt-6">No hay ofertas disponibles por ahora.</p>
      </div>
    );
  }

  return (
    <div className="nike-container bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12">
      {/* Encabezado */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
      </div>

      {/* Grid de productos */}
      <div className={`grid ${gridClasses} gap-6 lg:gap-8`}>
        {items.map((item) => (
          <div
            key={item.id || item.title}
            className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden
                       border border-white/20 hover:border-white/40
                       shadow-lg hover:shadow-2xl
                       transition-all duration-300
                       transform hover:scale-105"
          >
            {/* Efecto de brillo al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Item */}
            <Item {...item} ifExists={ifExists} />

            {/* Badge de oferta (opcional) */}
            {item.badge && (
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md z-10">
                {item.badge}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA opcional al final */}
      {title.toLowerCase().includes('oferta') && (
        <div className="text-center mt-12">
          <a
            href="https://wa.me/50664541700?text=Hola,%20estoy%20interesado%20en%20las%20ofertas%20de%20JACANA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.148.332-.396.495-.594.164-.198.223-.347.332-.57.108-.224.037-.421-.03-.594-.066-.173-.594-1.435-.811-1.907-.212-.471-.423-.446-.57-.446-.148 0-.322-.025-.495-.025-.173 0-.446.05-.669.3-.223.248-.848 1.04-1.279 2.144C3.263 10.52 3 11.494 3 12c0 .506.494 1.342.707 1.761.212.42.847 1.525 2.03 2.536 1.182 1.012 2.536 2.537 2.739 2.735.2.198.421.298.619.298.198 0 .446-.074.694-.222.248-.149 1.596-1.185 1.817-1.383.22-.198.47-.297.72-.297.248 0 .52.099.768.347.249.248 1.117 1.013 1.166 1.062.05.05.149.149.297.248.149.099 1.062.62 2.366.94 1.279.316 2.253.075 2.527-.025.272-.099.77-.347 1.067-.644.297-.298.471-.471.57-.669.099-.198.148-.297-.347-.396-.148-.099-1.09-.669-3.202-1.907-.12-.074-.248-.123-.371-.172-.123-.05-.222-.075-.346-.123Z" />
            </svg>
            ¿Tienes dudas? Chatea con nosotros
          </a>
        </div>
      )}
    </div>
  );
};

export default Sales;