import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => {
    useEffect(() => {
      console.log(props);
    }, [props.name]);
    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  };

  return hocComponent;
};
