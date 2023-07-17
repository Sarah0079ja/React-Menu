import React from 'react'

const Menu = ({menu}) => {
 
  return (
    <>
      <div className='container grid lg:grid-cols-3 md:grid-cols-2 mx-auto py-5 px-8 gap-8 '>
        {menu.map((menuItem) => {
          const { id, title, price, img, desc } = menuItem;
          return (
            <div className="rounded-lg  shadow-lg bg-white">
              <div key={id} className="">
                <img
                  src={img}
                  alt={title}
                  className="object-cover w-full rounded-t-lg"
                />
                <div className="flex justify-between align-middle mt-6 ">
                  <h2 className="text-xl p-2 text-slate-700 font-semibold capitalize">
                    {title}
                  </h2>
                  <button className="border mr-2 bg-orange-500 px-4  rounded-md text-white mt-2">
                    ${price}
                  </button>
                </div>
                <p className="text-gray-500 p-2 mt-3 mb-3">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu
