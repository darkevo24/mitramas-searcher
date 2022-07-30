import React, { useState,useEffect } from 'react'
import json from "./Customers.postman_collection.json"
import Navbar from './navbar';
import axios from "axios";
export default function Search() {
  const [data,setData] = useState([]);
  const [change,setChange] = useState("");
  const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU5MTgwMDU2LCJleHAiOjE2NTkxODM2NTYsIm5iZiI6MTY1OTE4MDA1NiwianRpIjoibVNXelNPSDRwS3hEaG8zWCIsInN1YiI6MTQ5LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EMzPIdJqv5QKZd5US0s23OTiuASOgbutDE3iF0f1tMw";
  const [checked, setChecked] = React.useState(true);
  const config ={
    headers: {
      Authorization: `${access_token}`
    }
  }
  useEffect(function(){
    axios.get('https://mitramas-test.herokuapp.com/customers',config)
    .then((res) => {
      console.log(res.data.data)
      setData(res.data.data);
    })
    .catch((error) => {
      console.error(error)
    })
  },[])
    const handleData = function(e){
      setChange(e.target.value);
      setFilters(data.filter(function(item){
        if (e.target.value == ""){
            return;
        }
        else if (item.name.includes(e.target.value)){
            return item;
        }
      }))
    }
    const [filters,setFilters] = useState(data);
    const sort = function(){
      setFilters(data.filter(function(item){
        if (item.name.includes(change)){
            return item;
        }
      }).sort(function(a,b){
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB)
         return -1;
        if (nameA > nameB)
         return 1;
        return 0; 
      }));
    }
    useEffect(function(){
      if (checked){
        setFilters(filters.filter(function(data){
          return data.status == "true";
        }))
      }
      else {
        setFilters(filters.filter(function(data){
          return data.status == "false";
        }))
      }
    },[checked])
  return (
    <div>
            <div className=' flex items-center justify-center mt-10'>
   <input value={change} onChange={handleData} className=' px-2 py-1 border-2 border-black'></input>
   <button  class= "ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Search
</button>
<button onClick={sort} class= "ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sort</button>
<label for="checked-toggle" class="inline-flex relative items-center cursor-pointer ml-5">
  <input         
  defaultChecked={checked}
  onChange={() => setChecked(!checked)} 
  type="checkbox" value="active" id="checked-toggle" class="sr-only peer"></input>
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked Active or Inactive</span>
</label>
    </div>
    <div className=' flex justify-center mt-5'>
        {change !== "" && 
    <div className=' border-gray-300'>
        {filters.map(function(item){
            return (
                <div className=' border-2 border-gray-400 p-2 m-5'>
               <p>id : {item.id}</p>
              <p>name : {item.name}</p>
              <p> address : {item.address}</p>
              <p>country : {item.country}</p>
                </div>
            )
        })}
    </div>
}
    </div>
    </div>
  )
}
