import React from 'react';
import { useTheme } from './themeProvider';

const Person = ({ onClick, name }) => {
  const theme = useTheme();

  const flattenedStyle = {
    ...styles.person,
    ...{ color: theme.primaryColor }
  };

  return (
    <div
      style={flattenedStyle}
      name={name}
      onClick={onClick.bind(this, 'Mane')}
    >
      Person is here
    </div>
  );
};

const styles = {
  person: {
    fontSize: 24,
    fontWeight: '600'
  }
};

export default Person;
