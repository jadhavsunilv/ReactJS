import React from 'react';
import './styles.scss';

const FormInput = (props:any) => {
    const{handleChange,label,...otherProps}=props;
  return (
    <div className="formRow">
       {label && (
        <label>
          {label}
        </label>
      )}
      <input className="formInput" onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default FormInput;