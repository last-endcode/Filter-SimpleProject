import React from 'react';

function MenuItem({ menu }) {
  return (
    <div className='section-center'>
      {menu.map((list_menu) => {
        const { link, id, img, title, price, category } = list_menu;
        return (
          <a href={link}>
            <article className='menu-picture' key={id}>
              <div className='img-container'>
                <img src={img} alt='' className='shirt' />
                <p className='category'>{category}</p>
              </div>
              <div className='picture-info'>
                <h3 className='title'>{title}</h3>
                <h3 className='price'>IDR {price}</h3>
              </div>
            </article>
          </a>
        );
      })}
    </div>
  );
}

export default MenuItem;
