import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import json from "./Customers.postman_collection.json"
import Navbar from './navbar';
import axios from 'axios';

function Home() {
  const [data,setData] = useState([]);
  const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU5MTgwMDU2LCJleHAiOjE2NTkxODM2NTYsIm5iZiI6MTY1OTE4MDA1NiwianRpIjoibVNXelNPSDRwS3hEaG8zWCIsInN1YiI6MTQ5LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EMzPIdJqv5QKZd5US0s23OTiuASOgbutDE3iF0f1tMw";
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
  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className=' w-2/3'>
        <p className=' text-center'>HomePage</p>
        <p className=' text-center'>{data.map(function(item){
          return (
            <div className='m-5 border-2 border-gray-400 p-2'>
              <p>id : {item.id}</p>
              <p>name : {item.name}</p>
              <p> address : {item.address}</p>
              <p>country : {item.country}</p>
              <p>Phone : {item.phone_number}</p>
            </div>
          )
        })}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
