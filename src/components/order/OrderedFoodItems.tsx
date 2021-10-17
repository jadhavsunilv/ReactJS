import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText,Button,makeStyles,ButtonGroup, Paper } from '@material-ui/core'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import React from 'react' //rfc
import { roundTo2DecimalPoint } from "../../utils";
import { connect } from 'react-redux'
import {IfoodItem} from '../../../src/Models/foodItem/foodItem' 
import { IOrderMaster,IorderDetails } from '../../../src/Models/orderMaster/orderMaster' 
import* as orderMasterAction from '../../state/actions/order/orderMasterAction'
 
const useStyles = makeStyles(theme => ({
    paperRoot: {
        margin: '15px 0px',
        '&:hover': {
            cursor: 'pointer'
        },
        '&:hover $deleteButton': {
            display: 'block'
        }
    },
    buttonGroup: {
        backgroundColor: '#E3E3E3',
        borderRadius: 8,
        '& .MuiButtonBase-root ': {
            border: 'none',
            minWidth: '25px',
            padding: '1px'
        },
        '& button:nth-child(2)': {
            fontSize: '1.2em',
            color: '#000'
        }
    },
    deleteButton: {
        display: 'none',
        '& .MuiButtonBase-root': {
            color: '#E81719'
        },
    },
    totalPerItem: {
        fontWeight: 'bolder',
        fontSize: '1.2em',
        margin: '0px 10px'
    }
}))
 function OrderedFoodItems(props:any) {
  const classes = useStyles();
  debugger
       
  let orderedFoodItems =  props.orderMaster.orderMasterData.length===0  ?[] :props.orderMaster.orderMasterData.orderDetails ;
   
  const removeFoodItem =(index:any ,item :any)=>{
        //let x=  orderedFoodItems.filter((_: any,i: any)=>i!=index);
        props.removeItemToMasterorderDetails(props.orderMaster.orderMasterData,item)

    }
    const updateQuantity = (item:IorderDetails, value:any) => {
         debugger
        let foodItem = orderedFoodItems.filter((x: { foodItemId: any; })=>x.foodItemId==item.foodItemId)[0];
        if(foodItem.quantity + value > 0)
         foodItem.quantity= parseInt(foodItem.quantity)+value
        props.updateQuantityById(props.orderMaster.orderMasterData,orderedFoodItems)
    }
       return (
        <List>
             {              
                orderedFoodItems.length==0?
                  <ListItem>
                  <ListItemText
                      primary="Please select food items"
                      primaryTypographyProps={{
                          style: {
                              textAlign: 'center',
                              fontStyle: 'italic'
                          }
                      }}
                  />
              </ListItem>
              :
                 orderedFoodItems.map((item:IorderDetails,index:any)=>(
                     <Paper key={index} className={classes.paperRoot}>
                            <ListItem>
                                <ListItemText primary={item.foodItemName} 
                                 primaryTypographyProps={{
                                    component: 'h1',
                                     
                                }} 
                                secondary={
                                    <>
                                        <ButtonGroup
                                            className={classes.buttonGroup}
                                            size="small">
                                            <Button
                                                onClick={e => updateQuantity(item, -1)}
                                            >-</Button>
                                            <Button
                                                disabled
                                            >{item.quantity}</Button>
                                            <Button
                                                onClick={e => updateQuantity(item, 1)}
                                            >+</Button>
                                        </ButtonGroup>
                                        <span className={classes.totalPerItem}>
                                            {'$' + roundTo2DecimalPoint(item.quantity * item.foodItemPrice)}
                                        </span>
                                    </>
                                }
                                secondaryTypographyProps={{
                                    component: 'div'
                                }}
                                
                                /> 
                                 <ListItemSecondaryAction  className={classes.deleteButton}>
                                     <IconButton onClick={()=>removeFoodItem(index,item)}>
                                         <DeleteTwoToneIcon ></DeleteTwoToneIcon>
                                     </IconButton>
                                 </ListItemSecondaryAction>
                            </ListItem>
                     </Paper>
                 ))
             }
        </List>
    )
}   
const mapStateToProps = (state:any) => {
     return {
     orderMaster:state.orderMaster,
    }
 }
 
 const mapActionToProps={
    updateOrderMaterOrder:orderMasterAction.updateOrderMaterOrder,
    addItemToMasterorderDetails:orderMasterAction.addItemToMasterorderDetails,
    removeItemToMasterorderDetails:orderMasterAction.removeItemToMasterorderDetails,
    updateQuantityById:orderMasterAction.updateQuantity
   }
 
 export default connect(
   mapStateToProps,
   mapActionToProps
 )(OrderedFoodItems)