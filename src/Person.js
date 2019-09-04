import React from 'react';
import withTheme from './hoc/withTheme';

const Person = ({ onClick, name }) => {
  return (
    <div name={name} onClick={onClick.bind(this, 'Mane')}>
      Person is here
    </div>
  );
};

export default withTheme(Person);
