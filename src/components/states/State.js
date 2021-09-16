import React from 'react';
import AddTaskModal from '../task-modal/AddTaskModal';
import CardList from '../card/CardList';
import './state.css';

const State = ({ title }) => {
  return (
    <div className='px-4 state-item'>
      <h4>{title}</h4>
      <CardList state={title} />
      <button
        className='btn btn-primary text-light fw-bold'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Add Task{' '}
      </button>
      <AddTaskModal />
    </div>
  );
};

export default State;
