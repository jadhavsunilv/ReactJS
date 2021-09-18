
import React,{useEffect,useState} from "react" ;
import {connect} from "react-redux";
import * as actions from "../actions/dCandidate";
import { Grid, Paper,withStyles, TableBody, TableCell, TableContainer, TableHead, TableRow, ButtonGroup } from "@material-ui/core";
import DcandidateForm from "./DcandidateForms";
import EditeIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
const styles=theme=>({
 root:{
     "& .MuiTableCell-head":{
         fontSize:"1.25rem"
     }
 },
 Paper:{
     margin:theme.spacing(2),
     padding:theme.spacing(2)
 }
})
const Dcandidates =({classes,...props})=>{
    
    
    const [currentId, setCurrentId] = useState(0); 

    useEffect(() => {
            //debugger
            //alert("call fetchAllDCandidates");
          props.fetchAllDCandidates();
         console.log( "useEffect : =>"+JSON.stringify(props));
    },[])
    return ( 
       
       <Paper className={classes.Paper} elevation={3} > 
        <Grid container>
            <Grid item xs={12} >
                 <DcandidateForm {...({currentId,setCurrentId})}/>
            </Grid>
            <Grid item xs={12} >
             <div>List of candidate</div>
             <TableContainer>
                 <table>
                     <TableHead className={classes.root}>
                         <TableRow>
                         <TableCell>Sr No.</TableCell>
                             <TableCell>Full Name</TableCell>
                             <TableCell>Age</TableCell>
                             <TableCell>Address</TableCell>
                             <TableCell>Blood Group</TableCell>
                             <TableCell>Email Id</TableCell>
                             <TableCell>Mobile No</TableCell>
                            
                         </TableRow>
                     </TableHead>
                     <TableBody>
                        {     
                                  props.dCandidateList.map((data,index)=>{
                                    return( <TableRow key={index}> 
                                            <TableCell>   {data.id}</TableCell>
                                            <TableCell>   {data.fullName}</TableCell>
                                            <TableCell>  {data.age}</TableCell>
                                            <TableCell>  {data.address}</TableCell>
                                            <TableCell>  {data.bloodGroup}</TableCell>
                                            <TableCell>  {data.emailId}</TableCell>
                                            <TableCell>  {data.mobileNo}</TableCell>
                                            
                                            <TableCell> 
                                             <ButtonGroup> 
                                                 <button><EditeIcon color="primay" onClick={()=>{ setCurrentId(data.id)}}/></button>
                                                 <button><DeleteIcon color="secondary"/></button>
                                              </ButtonGroup> </TableCell>
                                            </TableRow>
                                    )
                                })  
                             
                                
                        }
                     </TableBody>
                    
                 </table>
             </TableContainer>
        </Grid>
       
        </Grid>
        </Paper>
    )
}

/*const mapStateToProps=state=>{
    return {
        dCandidateList:state.dCandidateList.list
    }
}*/
const mapStateToProps=state=>({
    
        dCandidateList:state.dCandidate.list
})
const mapActionToProps={
    fetchAllDCandidates:actions.fetchAll
}
//withStyles(styles)
export default connect(mapStateToProps,mapActionToProps) (withStyles(styles) (Dcandidates));
