import React from 'react' 

const Categories = ({categories, filterItem}) => {
    
  return (
    <>
      <div className='flex justify-center items center space-x-10 mb-10 capitalize'>
        {categories.map((category, id) => {
          return (
            <button
              key={id}
              type="button"
              onClick={() => filterItem(category)}
              className="text-xl capitalize items-center px-6 py-2 rounded-md border bg-orange-500 text-white"
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Categories