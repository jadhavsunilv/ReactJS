import React from 'react';
import './styles.scss';

const AuthWrapper = (props:{ headline:any, children:any }) => {
    const{headline,children}=props;
  return (
    <div className="authWrapper">
      <div className="wrap">
        {headline && <h2>{headline}</h2>}
        <div className="children">
          {children && children}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;