import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import json from "./Customers.postman_collection.json"

function Home() {
  console.log(json);
  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className=' w-2/3'>
        <p className=' text-center'>HomePage</p>
        <p className=' text-center'>{JSON.stringify(json)}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
