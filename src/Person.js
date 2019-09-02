import React from 'react';
import Radium from 'radium';

const Person = ({ onClick }) => {
  const style = {
    '@media (min-width: 700px)': {
      color: 'red'
    }
  };

  return (
    <div style={style} onClick={onClick.bind(this, 'Mane')}>
      Person is here
    </div>
  );
};

export default Radium(Person);
