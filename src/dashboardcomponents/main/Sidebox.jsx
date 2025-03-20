// import React from "react";

// function Sidebox() {
//   return (
//     <div className=" mb-6 ">
//       <div className="grid grid-cols-1 gap-2">
//         <div className="max-h-[1200px]  min-w-40 rounded-2xl text-white bg-gradient-to-b from-neutral-600 via-neutral-600 to-neutral-700">
//           hello
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebox;


"use client"
import React, { useState } from "react";
import { items as initialItems } from "@/data/items";

function Sidebox() {
  const [items, setItems] = useState(initialItems);

  const handleAdd = (name, symbol) => {
    setItems([...items, { name, symbol }]);
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    // <div className="mb-6">
    //   <div className="max-h-[500px]  rounded-2xl text-white bg-gradient-to-b from-neutral-600 via-neutral-600 to-neutral-700 p-4 overflow-y-auto">
    <div className="h-full flex-1 flex flex-col">
      <div className="flex-1 min-h-0 rounded-2xl text-white  p-6 ">


        <ul className="space-y-2 ">
          {items.map((item, index) => (

            <li key={index} className="flex items-center justify-between p-4 bg-neutral-700 rounded-lg hover:border-2 hover:border-neutral-500 cursor-pointer">
              <span className="text-2xl">{item.symbol} {item.name}</span>
              <div className="space-x-2">
                <button 
                  onClick={() => handleAdd(item.name, item.symbol)} 
                 className=" cursor-pointer bg-gradient-to-l from-fuchsia-400 to-purple-600 text-white  text-2xl px-2 py-1 rounded font-semibold hover:border-2 hover:border-white "
                >
                  Add
                </button>
                {/* <button 
                  onClick={() => handleRemove(index)} 
                  className="cursor-pointer bg-gradient-to-r from-fuchsia-400 to-purple-600 text-white text-2xl px-2 py-1 rounded font-semibold hover:border-2 hover:border-white"
                >
                  Remove
                </button> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebox;

