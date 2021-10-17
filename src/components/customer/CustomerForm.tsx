import { Console } from 'console';
import React, { Props, useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import* as customerAction from '../../../src/state/actions/customerAction/customerAction'
 
 type TParams = { name?: string };
 interface iCustomer{
    customerID:number,
    customerName:string
 }
const CustomerFrom:React.FC=(Props:any,{ match }: RouteComponentProps<TParams>)  =>{
     //console.log("Test=>"+ JSON.stringify(Props.customersData));
    
     
     useEffect(() => {
        debugger
        Props.getCustomers()
      }, [])
  
      return <> { 
                    Props.customersData.loading ? "Loading " :  
                    Props.customersData.customers.map((user:iCustomer ,index:any) => <p> Name :{user.customerName}</p>)
                } 
         
           </>
}
const mapStateToProps = (state: { customerData: any; }) => {
    debugger
    return {
      customersData: state.customerData
    }
  }
  const mapActionToProps={
    getCustomers:customerAction.getCustomers
    }
 
   
  
  export default connect(
    mapStateToProps,
    mapActionToProps
  )(CustomerFrom)
  

