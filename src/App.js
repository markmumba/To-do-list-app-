import React, { Fragment } from 'react';
import Main from './Components/main';
import './App.css';



function App() {
  return (
    <Fragment>
      <div className='container mx-auto '>
        <h1 className='text-center font-bold text-5xl hover:line-through'>To do list </h1>
    <div className='flex flex-wrap'>
      <Main />
    </div>
        

      </div>
    </Fragment>
  );
}

export default App;
