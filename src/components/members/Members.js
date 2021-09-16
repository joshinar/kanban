import React from 'react';

const Members = ({ membersList }) => {
  return (
    <div className='d-flex'>
      {membersList &&
        membersList.map((member, idx) => (
          <p className='me-3 badge bg-secondary mt-2 fs-6' key={idx}>
            {member}
          </p>
        ))}
    </div>
  );
};

export default Members;
