import React from 'react';

const Person = ({ onClick }) => {
  return <div onClick={onClick.bind(this, 'Mane')}>Person is here</div>;
};

export default Person;
