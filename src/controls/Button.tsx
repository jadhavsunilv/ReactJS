import {
    Button as MuiButton,
    ButtonProps,
    makeStyles
  } from "@material-ui/core";
  
  interface IButtonProps extends ButtonProps {
    fontSize?: "small" | "medium" | "large";
  }
  
const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(1),
      '& .MuiButton-label': {
          textTransform: 'none'
      }
  }
}))

export default function Button(props:IButtonProps) {

  const { children, color, variant, onClick, className, ...other } = props;
  const classes = useStyles();

  return (
      <MuiButton
          className={classes.root + ' ' + (className || '')}
          variant={variant || "contained"}
          color={color || "default"}
          onClick={onClick}
          {...other}>
          {children}
      </MuiButton>
  )
}
 
 