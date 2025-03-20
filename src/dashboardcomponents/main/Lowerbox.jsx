import React from 'react'

function Lowerbox() {


  const items =[
    {
      "url": "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Sunset",
      "symbol": "🌇"
    },
    {
      "url": "https://images.unsplash.com/photo-1480497490787-505ec076689f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjAxMjgwJTIweCUyMDcyMHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Mountain",
      "symbol": "⛰️"
    },
    {
      "url": "https://images.unsplash.com/photo-1494879540385-bc170b0878a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9jZWFuJTIwMTI4MCUyMHglMjA3MjB8ZW58MHx8MHx8fDA%3D",
      "name": "Ocean",
      "symbol": "🌊"
    },
    {
      "url": "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJlZSUyMDEyODAlMjB4JTIwNzIwfGVufDB8fDB8fHww",
      "name": "Tree",
      "symbol": "🌳"
    }];

  return (
    
    <div className='grid grid-cols-1 gap-2 h-full w-full'>
        <div className='   rounded-4xl text-white bg-gradient-to-b from-neutral-600 via-neutral-600 to-neutral-700'>
            <ul className="space-y-2 p-4">
          {items.map((item, index) => (

            <li key={index} className="flex items-center justify-between p-4 bg-neutral-700 rounded-lg hover:border-2 hover:border-neutral-500 cursor-pointer">
              <span className="text-2xl">{item.symbol} {item.name}</span>
            
              
              </li>))}
              </ul>
        </div >
    </div>
    
  )
}

export default Lowerbox