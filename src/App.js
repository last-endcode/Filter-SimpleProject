import React, { useState } from 'react';
import collections from './collections';
import MenuItem from './Components/MenuItem';
import CategoryItem from './Components/CategoryItem';

const showAllCategories = [
  'All',
  ...new Set(collections.map((item) => item.category)),
];

function App() {
  const [menu, setMenu] = useState(collections);
  const [categories, setCategories] = useState(showAllCategories);
  const [index, setIndex] = useState([]);

  const filterShirt = (category) => {
    if (category === 'All') {
      // update
      setMenu(collections);
      return;
    }
    // originally filter
    const newFilter = collections.filter((item) => item.category === category);
    // update
    setMenu(newFilter);
  };

  return (
    <main class='section' transition-style='in:circle:center'>
      <div className='main-title'>
        <h2>best popular</h2>
        {categories[index]}
      </div>
      <div className='menu'>
        <CategoryItem
          showAllCategories={showAllCategories}
          filterShirt={filterShirt}
        />
        <MenuItem menu={menu} />
      </div>
    </main>
  );
}

export default App;
