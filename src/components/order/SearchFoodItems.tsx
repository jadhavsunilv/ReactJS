 
//import { IconButton, InputBase, ListItem, ListItemText,Paper,makeStyles,ListItemSecondaryAction } from '@material-ui/core';
import { IconButton,InputBase, List, ListItem, ListItemSecondaryAction, ListItemText,Button,makeStyles,ButtonGroup, Paper } from '@material-ui/core'
import SearchTwoTone from '@material-ui/icons/SearchTwoTone'
import React ,{useEffect, useState}from 'react'
import { connect } from 'react-redux'
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import* as orderMasterAction from '../../state/actions/order/orderMasterAction'
import* as foodItemAction from '../../state/actions/foodItems/foodItemsAction'
import {IfoodItem} from '../../../src/Models/foodItem/foodItem' 
import {orderDetails } from '../../../src/Models/orderMaster/orderMaster' 

const useStyles = makeStyles(theme => ({
    searchPaper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        marginLeft: theme.spacing(1.5),
        flex: 1,
    },
    listRoot: {
        marginTop: theme.spacing(1),
        maxHeight: 450,
        overflow: 'auto',
        '& li:hover': {
            cursor: 'pointer',
            backgroundColor: '#E3E3E3'
        },
        '& li:hover .MuiButtonBase-root': {
            display: 'block',
            color: '#000',
        },
        '& .MuiButtonBase-root': {
            display: 'none'
        },
        '& .MuiButtonBase-root:hover': {
            backgroundColor: 'transparent'
        }
    }
}))
type searchFoodItemsProps =
{    orderMaster: any;
     foodItems: any;
     getFoodItems: () => void;
     addItemToMasterorderDetails: (arg0: any, arg1: orderDetails) => void;
 }
 function SearchFoodItems(props:searchFoodItemsProps ) {
     debugger
     //https://www.youtube.com/watch?v=VOWVYpOy_Lw
     let orderMaster= props.orderMaster
     const classes=useStyles();
     const [searchList, setSearchList] = useState<IfoodItem[]>([]);
     const [searchKey,setSearchKey]= useState('')
     let foodItems = props.foodItems;

     useEffect(() => {
         debugger
        props.getFoodItems();
     }, [])
     useEffect(() => {
         debugger
            let x= foodItems.foodItems;
            x = x.filter((y: { foodItemName: string; }) => {
                return y.foodItemName.toLowerCase().includes(searchKey.toLocaleLowerCase())
                 
            });
             setSearchList(x);
        }, [searchKey ]) 
     
        const addFoodItem = (foodItem: IfoodItem) => {
                var  objOrderDetails=new orderDetails();
                 objOrderDetails.orderDetailId=0;
                 objOrderDetails.foodItemId= foodItem.foodItemId;
                 objOrderDetails.quantity=1;
                 objOrderDetails.foodItemPrice= foodItem.price;
                 objOrderDetails.foodItemName= foodItem.foodItemName ;
                 props.addItemToMasterorderDetails(orderMaster.orderMasterData,objOrderDetails)
          
       }
     return ( 
        <>
            <Paper className={classes.searchPaper}>
                <InputBase className={classes.searchInput} 
                value={searchKey}
                onChange={e=>setSearchKey(e.target.value)}
                placeholder="Search food items"/>
                <IconButton>
                    <SearchTwoTone></SearchTwoTone>
                </IconButton>
                </Paper>
                <List className={classes.listRoot}>
                    {    
                        searchList.map((item:IfoodItem ,index)=>(
                        <ListItem key={index}  onClick={e => addFoodItem(item)} >
                             <ListItemText primary={item.foodItemName} secondary={'$'+item.price} /> 
                            <ListItemSecondaryAction>
                                        <IconButton onClick={e => addFoodItem(item)}>
                                            <PlusOneIcon />
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                        </ListItem>
                        
                        ))
                    }
                 </List>
         </>
      )
  }
    
const mapStateToProps = (state:any) => {
    return {
      orderMaster:state.orderMaster,
      foodItems:state.foodItems
   }
 }
 const mapActionToProps={
    getOrderMater:orderMasterAction.getOrderMater,
    getFoodItems: foodItemAction.getFoodItems,
    updateOrderMaterOrder:orderMasterAction.updateOrderMaterOrder,
    addItemToMasterorderDetails:orderMasterAction.addItemToMasterorderDetails
}
 
 export default connect(
   mapStateToProps,
   mapActionToProps
 )(SearchFoodItems)