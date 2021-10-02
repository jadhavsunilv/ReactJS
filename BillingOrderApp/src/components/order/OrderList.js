import React,{useEffect,useState} from 'react'
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Table from "../../layouts/Table";
import { connect } from 'react-redux'
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import * as actions from '../../actions/orders/ordersAction';
function OrderList(props) {
    const { setOrderId, setOrderListVisibility, resetFormControls, setNotify,orderFoodItems } = props;
    useEffect(() => {(
        
         props.fetchOrderFoodItems()
      
    )}, [])  
    const showForUpdate = selectedRow => {
       setOrderId(selectedRow.orderMasterId);
        setOrderListVisibility(false);
    }
    const deleteOrder = item => {
        if (window.confirm('Are you sure to delete this record?')) {
              props.deleteOrderFoodItems(item.orderMasterId ,()=>{
                 setOrderId(0);
                 resetFormControls();
                 setOrderListVisibility(false);
                 setNotify({ isOpen: true, message: 'Deleted successfully.' });
                 props.fetchOrderFoodItems()
                })
          
        }
    }
    return (
        <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Order No.</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Payed With</TableCell>
                    <TableCell>Grand Total</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {  
                   orderFoodItems.orderFoodItems.length>0? 
                   orderFoodItems.orderFoodItems.map(item => (
                        
                    <TableRow key={item.orderMasterId}>
                        <TableCell
                            onClick={e => showForUpdate(item)}>
                            {item.orderNumber}
                        </TableCell>
                        <TableCell
                            onClick={e => showForUpdate(item)}>
                            {item.customer.customerName}
                        </TableCell>
                        <TableCell
                            onClick={e => showForUpdate(item)}>
                            {item.pMethod}
                        </TableCell>
                        <TableCell
                            onClick={e => showForUpdate(item)}>
                            {item.gTotal}
                        </TableCell>
                        <TableCell>
                            <DeleteOutlineTwoToneIcon
                                color="secondary"
                                onClick={e => deleteOrder(item)} />
                        </TableCell>

                    </TableRow>
                    ))
        
                    :<div> Loading</div>
                }
            </TableBody>
        </Table>
    </>
    )
    
}
const mapStateToProps = state => {
    
    return {
        orderFoodItems:state.orderFoodItems
  }
}

/*const mapDispatchToProps = dispatch => {
  return {
    
    fetchOrderFoodItems:()=>dispatch(fetchOrderFoodItems()),
    deleteOrderFoodItems:()=>dispatch(deleteOrderFoodItems())
    
  }
}
*/
const mapActionToProps={
    fetchOrderFoodItems:actions.fetchOrderFoodItems ,
    deleteOrderFoodItems:actions.deleteOrderFoodItems
    }

export default connect(
  mapStateToProps,
  mapActionToProps
)(OrderList)
