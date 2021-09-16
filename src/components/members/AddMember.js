import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/Context';
import Members from './Members';

const AddMember = () => {
  const { membersList, fetchMembers } = useContext(AppContext);
  const [member, setMember] = useState('');

  const onAddmember = () => {
    if (!member) return;
    membersList.unshift(member);
    localStorage.setItem('members', JSON.stringify(membersList));
    setMember('');
    fetchMembers();
  };

  return (
    <div className='col-md-2 ms-4 my-4 d-flex flex-column'>
      <form>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            value={member}
            onChange={(e) => setMember(e.target.value)}
            placeholder='Add a Member'
          />
          <button
            className='btn btn-primary ms-1'
            onClick={() => onAddmember()}
            type='submit'
          >
            Add
          </button>
        </div>
      </form>
      <Members membersList={membersList} />
    </div>
  );
};

export default AddMember;
