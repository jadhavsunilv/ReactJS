import React from 'react';
import './styles.scss';

const Button = (props:any) => {
  const { children, ...otherProps } = props;
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
}

export default Button