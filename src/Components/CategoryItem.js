import React, { useState } from 'react';

function CategoryItem({ showAllCategories, filterShirt }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className='button-container'>
        {showAllCategories.map((category, index) => {
          return (
            <button
              className={`btn ${index === value && `active-btn`}`}
              onClick={() => {
                filterShirt(category);
                setValue(index);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className='title-category'>
        <h4>type : {showAllCategories[value]}</h4>
        <div className='underline'></div>
      </div>
    </>
  );
}

export default CategoryItem;
