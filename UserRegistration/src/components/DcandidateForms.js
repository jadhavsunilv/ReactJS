import React ,{useState } from "react" ;
import {connect} from "react-redux";
import {Grid,TextField,withStyles,FormControl,InputLabel, FormHelperText  } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import useForm from "./useForm"
import * as actions from "../actions/dCandidate";
import { ReceiptTwoTone } from "@material-ui/icons";
const styles=theme=>({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
              },
          },
          formControl:{
            margin: theme.spacing(1),
            width: '430'

          },
          SMmargin :{margin: theme.spacing(1)  }
     
})
const initialFieldValues={
    fullName :'',
    mobileNo:'',
    emailId:'',
    age:'',
    bloodGroup:'',
    address:''
}
const DcandidateForm =({classes,...props})=>{
   const validate=(fieldValues=values)=>{
    let temp={}
    if('fullName' in fieldValues )
     temp.fullName=fieldValues.fullName ? "" :"This Field is requird."
     if('mobileNo' in fieldValues )
     temp.mobileNo=fieldValues.mobileNo?"":"This Field is requird."
     if('emailId' in fieldValues )
     temp.emailId=(/^$|.+@.+..+/).test(fieldValues.emailId)?"":"Email is not valid"
     if('bloodGroup' in fieldValues )
     temp.bloodGroup=fieldValues.bloodGroup ?"":"This Field is requird."
     setErrors({
         ...temp
     })
     if(fieldValues==values)
        return Object.values(temp).every(x=>x=="")
   }
   
    const {
        values,
        errors,
        setErrors,
        setValues,
        handleInputChange,
        resetFrom
    } 
    =useForm(initialFieldValues,validate, props.setCurrentId)
            /* const inputLabel=React.useRef(null)
            const [lebelWidth,setLebelWidth]=React.useState(0);
            React.useEffect(()=>{
                    setLebelWidth(inputLabel.current.offsetWidth)
            }, [])
            */
        React.useEffect(()=>{
            if(props.currentId!=0){ 
                debugger
                let ss=props.dCandidateList;   
                setValues({
                    ...props.dCandidateList.find(x=>x.id==props.currentId)
                })
                setErrors({})
            }
           },[props.currentId])
        

    const handleSubmit=e=>{
        debugger
            e.preventDefault();  //prevent a browser reload/refresh.
            if(validate()){
               if( parseInt(props.currentId)===0)
                props.createDCandidatedata(values,()=>{ window.alert("Inserted")})
                else 
                props.updateDCandidateData(props.currentId,values,()=>{ window.alert("Updated")})
            }
            console.log(values);
    }
    return (
    <form autoComplet="off" noValidate className={classes.root} onSubmit={handleSubmit}>
           User Registration From
            <Grid container>
                <Grid item xs={6}> 
                    <TextField name="fullName" variant="outlined" label="Full Name" value={values.fullName} onChange={handleInputChange}
                     {...(errors.fullName && {error:true,helperText:errors.fullName})}>
                     </TextField>
                    
                    <TextField name="mobileNo" variant="outlined" label="mobile No" value={values.mobileNo} onChange={handleInputChange}
                   {...(errors.mobileNo && {error:true,helperText:errors.mobileNo})}>
                    </TextField>
                     <FormControl  variant ="outlined" className={classes.formControl}
                     {...(errors.bloodGroup && {error:true})}
                     >
                        <InputLabel>Blood Group</InputLabel>
                        <Select name="bloodGroup" 
                            value={values.bloodGroup}
                            onChange={handleInputChange}
                         >
                            <MenuItem value="">Select Blood Group </MenuItem>
                            <MenuItem value= "A">A</MenuItem>
                            <MenuItem value= "A+">A +ve</MenuItem>
                            <MenuItem value= "AB+">AB +ve</MenuItem>
                            <MenuItem value= "O+">O +ve</MenuItem>
                        </Select>
                        {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
                     </FormControl>
                     <TextField name="UserName" variant="outlined" label="User Name" value= ""  >
                
                    </TextField>
                    <TextField   label="Password"  floatingLabelText="Password" type="password">
                        </TextField>
                </Grid>

                <Grid item xs={6}>
                <TextField name="emailId" variant="outlined" label="email Id" value={values.emailId} onChange={handleInputChange}
                   {...(errors.emailId && {error:true,helperText:errors.emailId})}>
                    </TextField>
                    <TextField name="address" variant="outlined" label="Address" value={values.address} onChange={handleInputChange}>
                    </TextField>
                    <TextField name="age" variant="outlined" label="Age" value={values.age} onChange={handleInputChange}>
                    </TextField>
                    
                    <div>
                    <Button variant="contained" color="Primay" type="submit" className={classes.SMmargin}>Submit</Button>
                    <Button variant="contained" color="primay" type="reset" className={classes.SMmargin} onClick={resetFrom}>Reset</Button>
                    </div>
                    
                </Grid>
            </Grid>
    </form>
    
    )
}
const mapStateToProps=state=>({
    dCandidateList:state.dCandidate.list
})
const mapActionToProps={
createDCandidatedata:actions.create,
updateDCandidateData:actions.Update
}
export default connect(mapStateToProps,mapActionToProps) (withStyles(styles)(DcandidateForm))