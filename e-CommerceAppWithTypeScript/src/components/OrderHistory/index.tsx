import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react'

const columns = [
    {
      id: 'orderCreatedDate',
      lable: 'Order Date'
    },
    {
      id: 'documentID',
      lable: 'Order ID'
    },
    {
      id: 'orderTotal',
      lable: 'Amount'  
    }
  ];

  const styles = {
    fontSize: '16px',
    cursor: 'pointer',
    width: '10%'
  };

const OrderHistory = () => {
  return (
       <TableContainer>
           <Table>
               <TableHead>
                   <TableRow>
                       {columns.map((column,pos)=>{
                           const {lable}=column;
                           return(
                            <TableCell style={styles} >
                               {lable} 
                            </TableCell>
                           )
                       })}
                   </TableRow>
               </TableHead>
               <TableBody>
                 <TableRow>
                     
                 </TableRow>
               </TableBody>
           </Table>
       </TableContainer>

  )
}

export default OrderHistory