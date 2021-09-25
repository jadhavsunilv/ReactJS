import React from 'react'
import OrderForm from './OrderForm'
import { useForm } from '../../hooks/useForm';
import { Grid } from '@material-ui/core';
import SearchFoodItems from './SearchFoodItems';
import OrderedFoodItems from './OrderedFoodItems';

const genrateOrderNumber=()=>  Math.floor(100000 + Math.random() * 900000).toString();
const getFreshModelObect=()=>({
    orderMasterId:0,
    orderNumber:genrateOrderNumber(),
    customerId:0,
    pMethod:'none',
    gTotal:0,
    deletedOrderItemIds:'',
    orderDetails:[]
}) 
export default function Order() {
    const{  values,
            setValues,
            errors,
            setErrors,
            handleInputChange,
            resetFormControls
        } = useForm(getFreshModelObect)

        
    return ( 
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <OrderForm 
                    {...{values,setValues,errors,setErrors,resetFormControls,handleInputChange}}
                    /> 
                </Grid>
                <Grid item xs={6} >
                <SearchFoodItems
                    {...{
                        values,
                        setValues
                    }}
                />
                        </Grid>
                <Grid item xs={6}>
                        <OrderedFoodItems
                         {...{values,setValues}}
                         ></OrderedFoodItems>    
                        </Grid>
            </Grid>
    
    )
}
