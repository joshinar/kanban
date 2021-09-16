import React, { useContext } from 'react';
import { AppContext } from '../../context/Context';
import State from './State';
import './state.css';

const StateList = () => {
  const { states } = useContext(AppContext);
  return (
    <div className='states-container ms-4'>
      {states.map((state, idx) => (
        <State title={state} key={idx} />
      ))}
    </div>
  );
};

export default StateList;
