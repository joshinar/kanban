import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/Context';
import './card.css';

const Card = ({ data, id }) => {
  const { membersList, states, issues, fetchIssues } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [taskDetails, setTaskDetails] = useState({
    description: data.description,
    assignee: data.assignee,
    dueDate: data.dueDate,
    state: data.state,
    id: data.id,
  });
  const onUpdateTask = () => {
    const updateArr = [...issues];
    updateArr.forEach((item) => {
      if (item.id === id) {
        item.description = taskDetails.description;
        item.assignee = taskDetails.assignee;
        item.dueDate = taskDetails.dueDate;
        item.state = taskDetails.state;
      }
    });
    localStorage.setItem('issues', JSON.stringify(updateArr));
    fetchIssues();
    setIsEditing(false);
  };
  return (
    <div
      className='card  my-3 p-2 card-container'
      onDoubleClick={() => setIsEditing(true)}
      style={{
        background: new Date(data.dueDate) < new Date() ? '#f5aea9' : '#aff5a9',
      }}
    >
      <textarea
        value={taskDetails.description}
        disabled={!isEditing}
        onChange={(e) =>
          setTaskDetails({ ...taskDetails, description: e.target.value })
        }
        className='mt-1'
        rows={3}
      />
      <div className='input-group mt-1'>
        <span className='me-2'>Due:</span>
        <input
          type='date'
          value={taskDetails.dueDate}
          style={{ border: 'none' }}
          disabled={!isEditing}
          onChange={(e) =>
            setTaskDetails({ ...taskDetails, dueDate: e.target.value })
          }
        />
      </div>
      <p hidden={isEditing}>Assigned to: {data.assignee}</p>
      <select
        className='form-control mt-1'
        onChange={(e) =>
          setTaskDetails({ ...taskDetails, assignee: e.target.value })
        }
        hidden={!isEditing}
      >
        <option value={''}>Assign To</option>
        {membersList &&
          membersList.map((member, idx) => (
            <option value={member} key={idx}>
              {member}
            </option>
          ))}
      </select>
      <select
        className='form-control mt-1'
        onChange={(e) =>
          setTaskDetails({ ...taskDetails, state: e.target.value })
        }
        hidden={!isEditing}
      >
        <option value={''}>Change Status</option>
        {states &&
          states.map((state, idx) => (
            <option value={state} key={idx}>
              {state}
            </option>
          ))}
      </select>
      <button
        className='btn btn-warning mt-1'
        hidden={!isEditing}
        onClick={() => onUpdateTask()}
      >
        Update
      </button>
    </div>
  );
};

export default Card;
