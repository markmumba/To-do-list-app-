import React, { Fragment } from 'react';
import Forms from './Components/Form/Form';
import './App.css';



function App() {
  return (
    <Fragment>
      <div className='container mx-auto '>
      <h1 className='text-center font-bold text-5xl hover:line-through'>To do list </h1>
        <Forms />
      </div>
    </Fragment>
  );
}

export default App;
