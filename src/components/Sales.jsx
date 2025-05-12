import React from 'react'
import Item from './utils/Item'
import Title from './utils/Title'
import Subtitle from './utils/Subtitle'

const Sales = ({ ifExists, endpoint: { title, items, subtitle } }) => {
  const gridClasses = ifExists
    ? 'grid-cols-1 xl:grid-cols-2 sm:grid-cols-1'
    : 'grid-cols-1 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1';

  return (
    <div className='nike-container bg-gray-900 text-white'>
      <Title title={title} />
      <Subtitle subtitle={subtitle} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${gridClasses}`}>
        {items?.map((item) => (
          <Item key={item.id || item.title} {...item} ifExists={ifExists} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
