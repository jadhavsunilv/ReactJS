import { Grid, InputAdornment,makeStyles ,ButtonGroup, Button as MuiButton  } from '@material-ui/core'
import ReorderIcon from '@material-ui/icons/Reorder';
import React ,{useState,useEffect}from 'react'
import { connect } from 'react-redux'
import   * as customerAction   from '../../actions/customer/customerAction'
import * as orderAction  from '../../actions/orders/ordersAction'
import ReplayIcon from '@material-ui/icons/Replay';
import Form from '../../layouts/Form'
import {Input,Select,Button}  from "../../controls"
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { roundTo2DecimalPoint } from "../../utils";
import { useForm } from '../../hooks/useForm';
import Notification from "../../layouts/Notification";
import Popup from '../../layouts/PopUp';
import { Reorder } from '@material-ui/icons';
import OrderList from './OrderList';
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

function OrderForm(props) {
    const{ values,setValues,errors,setErrors,resetFormControls,handleInputChange,customerList}=props;
    let customerList1= customerList.customers.length==0 ? [{id:0,title:"--Select--"}] :customerList.customers
   
    const classes=useStyles();
    const[orderListVisibility ,setOrderListVisibility]=useState(false);
    const [orderId, setOrderId] = useState(0);
    const [notify, setNotify] = useState({ isOpen: false })
    
    const resetForm = () => {
        resetFormControls();
        setOrderId(0);
    }
    useEffect(() => {
     
        props.fetchCustomer()
       
      }, [])
    useEffect(() => {
       
        if (orderId == 0) resetFormControls()
        else {
            props.fetchOrderFoodItemsById(orderId,(data)=>{
              
                 setValues(data);
                    setErrors({});
            })
             
        }
    }, [orderId]);
    useEffect(()=>{
           
        let gTotal=values.orderDetails.reduce((tempTotal,item)=>{
               return tempTotal+= parseFloat(item.foodItemPrice) * parseInt(item.quantity)
        },0)
        setValues({
            ...values,gTotal: roundTo2DecimalPoint(gTotal)
        })
},[JSON.stringify(values.orderDetails)]) 
    const validateForm = () => {
                
        let temp = {};
        temp.customerId = values.customerId != 0 ? "" : "This field is required.";
        temp.pMethod = values.pMethod != "none" ? "" : "This field is required.";
        temp.orderDetails = values.orderDetails.length != 0 ? "" : "This field is required.";
        setErrors({ ...temp });
        return Object.values(temp).every(x => x === "");
    }
    const submitOrder=e=>{
        e.preventDefault();
        
        if (validateForm()) {
            if (values.orderMasterId == 0) {
                props.createOrderFoodItems(values,()=>{
            
                    resetFormControls();
                    setNotify({isOpen:true, message:'New order is created.'});
                })
                
            }else {
                props.updateOrderFoodItems(values.orderMasterId ,values ,()=>{
                    resetFormControls();
                    setNotify({isOpen:true, message:'Order Updated.'});
                })
                
            }
        }
    }
    const openListOfOrders=()=>{
        setOrderListVisibility(true);
    }
    return (
        <>
            <Form onSubmit={submitOrder}>
                <Grid container >
                  <Grid item xs="6">
                      <Input disabled label ="Order Number" name ="OrderNumber"
                      InputProps={
                          {
                             startAdornment:<InputAdornment className={classes.adornmentText} position="start" >#</InputAdornment>
 
                          }
                      }
                      value={values.orderNumber}></Input>
                      <Select
                          label="Customer"
                          name="customerId"
                          value={values.customerId}
                          onChange={handleInputChange}
                          options={customerList1}
                          error={errors.customerId}
                      />
                  </Grid>
                  <Grid item xs="6">
                  <Select label="Payment Method" name="pMethod" value={values.pMethod}
                  onChange={handleInputChange}
                   options={pMethods}
                   error={errors.pMethod}
                   >
                     
                   </Select>
                  <Input disabled label ="Grand Total" name ="gTotal"
                   value={values.gTotal}
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
                              onClick={resetForm}
                              startIcon={<ReplayIcon />}
                          />
                      </ButtonGroup>
                      <Button size="large"  startIcon={<ReorderIcon/>} onClick={openListOfOrders} > Orders</Button>
                  </Grid>
                </Grid>

                
            </Form>
            <Popup title="List of Orders" 
                    openPopup={orderListVisibility} 
                    setOpenPopup={setOrderListVisibility}
               >
                    <OrderList
                    {...{ setOrderId, setOrderListVisibility,resetFormControls,setNotify }} />
               </Popup>
               <Notification
                {...{ notify, setNotify }} />            
             
      </>
  )
}
const mapStateToProps = state => {
    
    return {
        customerList: state.customers,
        foodItems:state.foodItems,
        orderFoodItems:state.orderFoodItems.orderFoodItems
   }
 }
 
/*const mapDispatchToProps = dispatch => {
   return {
     fetchCustomer: () => dispatch(fetchAllCustomer()),
     createOrderFoodItems:()=>dispatch(createOrderFoodItems())
   }
 }*/
 const mapActionToProps={
    fetchCustomer:customerAction.fetchAllCustomer ,
    createOrderFoodItems:orderAction.createOrderFoodItems,
    fetchOrderFoodItemsById:orderAction.fetchOrderFoodItemsById,
    updateOrderFoodItems:orderAction.updateOrderFoodItems

    }
 
 export default connect(
   mapStateToProps,
   mapActionToProps
 )(OrderForm)
 
