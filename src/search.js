import React, { useState } from 'react'
import json from "./Customers.postman_collection.json"

export default function Search() {
    const [data,setData] = useState("");
    const handleData = function(e){
      setData(e.target.value);
      setFilters(json.item.filter(function(item){
        if (e.target.value == ""){
            return;
        }
        else if (item.name.includes(e.target.value)){
            return item;
        }
      }))
    }
    const [filters,setFilters] = useState(json.item);
  return (
    <div>
            <div className=' flex items-center justify-center mt-10'>
   <input value={data} onChange={handleData} className=' px-2 py-1 border-2 border-black'></input>
   <button  class= "ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Search
</button>
    </div>
    <div className=' flex justify-center mt-5'>
        {data !== "" && 
    <div className=' w-80 border-2 border-gray-300'>
        {filters.map(function(data){
            return (
                <div className=' border-2 border-gray-100'>
                    {data.name}
                </div>
            )
        })}
    </div>
}
    </div>
    </div>
  )
}
