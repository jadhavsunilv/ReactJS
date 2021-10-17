 
import { Grid, InputAdornment,makeStyles ,ButtonGroup, Button as MuiButton, Select, FormControl, InputLabel, NativeSelect, FormHelperText, MenuItem  } from '@material-ui/core'
import ReorderIcon from '@material-ui/icons/Reorder';
import React, { Dispatch, SetStateAction ,useEffect, useState} from 'react'
import { Button,Input}  from "../../controls"
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReplayIcon from '@material-ui/icons/Replay';
import Form from '../../layouts/Form';
import { BrowserRouter as Router,useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import* as customerAction from '../../../src/state/actions/customerAction/customerAction'
import* as orderMasterAction from '../../state/actions/order/orderMasterAction'
import { IOrderMaster } from '../../Models/orderMaster/orderMaster';
const pMethods= [
    {id:'none',title:"--Select--"},
    {id:'Cash',title:"Cash"},
    {id:'Card',title:"Card"}
]
const useStyles = makeStyles(theme => ({
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },
    submitButtonGroup: {
        backgroundColor: '#f3b33d',
        color: '#000',
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#f3b33d',
        }
    }
}))
 
 function OrderForm(props :any) {
    const classes=useStyles();
    let orderMaster= props.orderMaster.orderMasterData;
    const [errors, setErrors] = useState({});
    let customerList1=props.customerList.customers.length==0 ? [{customerID:0,customerName:"--Select--"}] :props.customerList.customers
    useEffect(() => {
        props.getCustomers()
        props.getOrderMater()
      }, [])
     
      useEffect(()=>{
        if(orderMaster.length!=0){
          let gTotal=orderMaster.orderDetails.reduce((tempTotal: number,item: { foodItemPrice: string; quantity: string; })=>{
               return tempTotal+= parseFloat(item.foodItemPrice) * parseInt(item.quantity)
           },0) 
           props.updateOrderMaterOrder(orderMaster,"gTotal",gTotal)
        }
        
    },[JSON.stringify(orderMaster.orderDetails)]) 

    const AddCustomer=()=>{
        console.log("add large button")
    }
    const handleInputChange = (event: React.ChangeEvent<{name?: string | undefined; value: unknown;}>) => {
        props.updateOrderMaterOrder(orderMaster,event.target.name,event.target.value)
    }
    const validateForm = ( ) => {
        //var validation=new orderMaster();     
      /*  let customerId=orderMaster.customerId != 0 ? "" : "This field is required."
      let  validations: {
            customerId:customerId
            pMethod :
            orderDetails:{} orderMaster.orderDetails.length != 0 ? "" : "This field is required."}
        }
        return Object.values(validations).every(x => x === ""); 
     */
      /*  temp.customerId = orderMaster.customerId != 0 ? "" : "This field is required.";
        temp.pMethod = orderMaster.pMethod != "none" ? "" : "This field is required.";
        temp.orderDetails = orderMaster.orderDetails.length != 0 ? "" : "This field is required.";
        
        //setErrors({ ...temp });
        //return Object.values(temp).every(x => x === "");
         */

        //=========================
          /* 
        let customerId=orderMaster.customerId != 0 ? "" : "This field is required."
       let pMethod= orderMaster.pMethod != "none" ? "" : "This field is required."
       let orderDetails= orderMaster.orderDetails.length != 0 ? "" : "This field is required."
       
       let temp = {customerId:customerId,pMethod:pMethod,orderDetails:orderDetails };

       setErrors({ ...temp });
        let ss= Object.values(temp).every(x => x === "");
        debugger
*/
      /* temp.customerId = values.customerId != 0 ? "" : "This field is required.";
       temp.pMethod = values.pMethod != "none" ? "" : "This field is required.";
       temp.orderDetails = values.orderDetails.length != 0 ? "" : "This field is required.";
    */
       
    //: React.FormEvent<HTMLFormElement>
       // e.preventDefault();
        //if (validateForm()) {
           /* if (values.orderMasterId == 0) {
                props.createOrderFoodItems(values,()=>{
            
                    resetFormControls();
                    setNotify({isOpen:true, message:'New order is created.'});
                })
                
            }else {
                props.updateOrderFoodItems(values.orderMasterId ,values ,()=>{
                    resetFormControls();
                    setNotify({isOpen:true, message:'Order Updated.'});
                })
                
            }*/
      ///  }
    }
    //Note: HTMLFormElement,HTMLInputElement
    const submitForm = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        
      
    }
   

    return (
        <>
            <Form  onSubmit={submitForm} >
                    <Grid container >
                        <Grid item xs={6}> 
                        <Input disabled label ="Order Number" name ="OrderNumber"
                      InputProps={
                          {
                             startAdornment:<InputAdornment className={classes.adornmentText} position="start" >#</InputAdornment>
                           }
                      }
                      value={orderMaster.orderNumber}></Input>
                      <FormControl variant={"outlined"}>
                        <InputLabel>Customer</InputLabel>
                        <Select      name="customerId"
                        labelId="customerId"
                        id="demo-simple-select-disabled"
                        value={orderMaster.customerId}
                        label="Customer"
                        onChange={handleInputChange}
                        >
                         {
                                customerList1.map((user:any) =>(
                                <MenuItem value={user.customerID}>{user.customerName}</MenuItem>
                                ))
                         }
                        
                      </Select>
                   </FormControl>
                   <Button size="large"  startIcon={<ReorderIcon/>} onClick={AddCustomer} > Add Customer</Button>
                        </Grid>
                    <Grid item xs={6}>
                                <FormControl variant={"outlined"}>
                                    <InputLabel>Payment Method</InputLabel>
                                    <Select  name="pMethod"
                                    labelId="pMethod"
                                    value={orderMaster.pMethod}
                                    label="Payment Method"
                                    onChange={handleInputChange}
                                    >
                                    {
                                            pMethods.map((payM) =>(
                                            <MenuItem value={payM.id}>{payM.title}</MenuItem>
                                            ))
                                    }
                                </Select>
                                
                                </FormControl>  
                                <Input disabled label ="Grand Total" name ="gTotal"
                                value={orderMaster.gTotal}
                                InputProps={
                                    {
                                        startAdornment:<InputAdornment className={classes.adornmentText} position="start" >$</InputAdornment>

                                    }
                                }
                                ></Input>
                 
                                    <ButtonGroup className={classes.submitButtonGroup}>
                                        <MuiButton
                                            size="large"
                                            endIcon={<RestaurantMenuIcon />}
                                            type="submit">Submit</MuiButton>
                                        <MuiButton
                                            size="small"
                                            onClick={()=>{ }}
                                            startIcon={<ReplayIcon />}
                                        />
                                    </ButtonGroup>
                                    <Button size="large"  startIcon={<ReorderIcon/>}  > Orders</Button>
                                    </Grid>        
                  </Grid>
            </Form>
        </>
    )
}
const mapStateToProps = (state:any) => {
    debugger
    return {
        customerList: state.customerData,
        orderMaster:state.orderMaster
   }
 }

 const mapActionToProps={
    getCustomers:customerAction.getCustomers,
    getOrderMater:orderMasterAction.getOrderMater,
    updateOrderMaterOrder:orderMasterAction.updateOrderMaterOrder
    }
 
 export default connect(
   mapStateToProps,
   mapActionToProps
 )(OrderForm)

