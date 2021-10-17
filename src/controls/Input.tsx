 import React from 'react'
import { TextField ,TextFieldProps,makeStyles} from '@material-ui/core';
 /*
interface ITextFieldProps extends TextFieldProps {
    fontSize?: "small" | "medium" | "large";
    error?: null | undefined;
  }
  */
export default function Input(props: TextFieldProps) {

    const { name, label, value, variant, onChange, error = null, ...other } = props;
    return (
        <TextField
            variant={variant || "outlined"}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}
 