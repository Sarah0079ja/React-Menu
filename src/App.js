import { useState } from 'react';
import Menu from './menu'
import Categories from './categories'
import menu from './data'

const allCategories = ['all', ...new Set(menu.map((menu1) => menu1.category)) ]

function App() {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories]= useState(allCategories)

  const filterItem = (category) => {

    if(category === 'all') {
      setMenuItems(menu)
      return;
    }
    const newMenu = menu.filter((menu1) => menu1.category === category)
    setMenuItems(newMenu)
  }
  return (
    <div className="">
      <div className="flex justify-center mb-10 capitalize">
        <h1 className="text-4xl border-b-4 border-orange-500  mt-20">
          Our Menu
        </h1>
      </div>

      <Categories categories={categories} filterItem={filterItem} />
      <Menu menu={menuItems} />
    </div>
  );
}

export default App;
