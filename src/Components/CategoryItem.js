import React from 'react';

function CategoryItem({ showAllCategories, filterShirt }) {
  return (
    <div className='button-container section'>
      {showAllCategories.map((category, index) => {
        return (
          <button
            className='btn'
            key={index}
            onClick={() => filterShirt(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryItem;
