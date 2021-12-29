import React, { useState } from 'react';
const SampleForm = props => {
  /* One way data binding */
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function setName() {
    setFirstName('Joshua');
  }

  function setSurName() {
    setLastName('Fontiveros');
  }

  return (
    <div className='d-flex flex-column w-25 justify-content-'>
      <p>
        <strong>
          Hello {firstName} {lastName} !
        </strong>
      </p>
      <form action='' className='d-flex flex-column'>
        <label htmlFor='firstName'>
          <strong>First Name:</strong>
        </label>
        <input
          type='text'
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
        />
        <label htmlFor='lastName'>
          <strong>Last Name:</strong>
        </label>
        <input
          type='text'
          onChange={f => setLastName(f.target.value)}
          value={lastName}
        />
      </form>
      <button onClick={setName}>Set FirstName</button>
      <button onClick={setSurName}>Set Last name</button>
    </div>
  );
};

export default SampleForm;
