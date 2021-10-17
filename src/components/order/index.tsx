import React,{useEffect} from 'react'
import { Grid } from '@material-ui/core';
import OrderForm from './OrderForm';
import SearchFoodItems from './SearchFoodItems';
import OrderedFoodItems from './OrderedFoodItems';
import { useForm } from '../../hooks/useForm';
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

 function Order() {
     //https://github.com/wesionaryTEAM/json-server-app/blob/master/src/components/customer/CreateCustomer.tsx
 
    
    return(
       
            <Grid container spacing={2}>
                 
                <Grid item xs={12}>
                <OrderForm 
                    /> 
                </Grid>
                <Grid item xs={6}>
                <SearchFoodItems 
                />

                </Grid>
             <Grid item xs={6}>
                     <OrderedFoodItems></OrderedFoodItems>    
             </Grid>
          </Grid>
        )
}
 
  export default Order