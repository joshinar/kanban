import React, { useState, useContext, useRef } from 'react';
import { AppContext } from '../../context/Context';
import { v4 as uuid } from 'uuid';

const AddTaskModal = () => {
  const btnRef = useRef();
  const { membersList, states, fetchIssues, issues } = useContext(AppContext);
  const [taskDetails, setTaskDetails] = useState({
    id: uuid(),
    description: '',
    assignee: '',
    dueDate: '',
    state: '',
  });

  const onAddTask = () => {
    const taskData = issues;
    taskData.push(taskDetails);
    localStorage.setItem('issues', JSON.stringify(taskData));
    btnRef.current.click();
    fetchIssues();
  };
  return (
    <div className='modal fade' id='exampleModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Add Task
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <textarea
              className='form-control'
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, description: e.target.value })
              }
              placeholder='Task Description'
            ></textarea>
            <select
              className='form-control mt-2'
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, assignee: e.target.value })
              }
            >
              <option value={''}>Assign To</option>
              {membersList &&
                membersList.map((member, idx) => (
                  <option value={member} key={idx}>
                    {member}
                  </option>
                ))}
            </select>
            <input
              type='date'
              className='form-control mt-2'
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, dueDate: e.target.value })
              }
            />
            <select
              className='form-control mt-2'
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, state: e.target.value })
              }
            >
              <option value={''}>Select State</option>
              {states &&
                states.map((state, idx) => (
                  <option value={state} key={idx}>
                    {state}
                  </option>
                ))}
            </select>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
              ref={btnRef}
            >
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => onAddTask()}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
