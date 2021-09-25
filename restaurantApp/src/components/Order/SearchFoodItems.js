import { IconButton, InputBase, ListItem, ListItemText,Paper,makeStyles,ListItemSecondaryAction } from '@material-ui/core';
import SearchTwoTone from '@material-ui/icons/SearchTwoTone'
import React ,{useEffect, useState}from 'react'
import {createAPIEndpoint,ENDPIONTS} from '../../api';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
export default function SearchFoodItems(props) {
    
    const { values, setValues } = props;
    
    const classes=useStyles();
    const [foodItems, setFoodItems] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchKey,setSearchKey]= useState('')
    let orderedFoodItems = values.orderDetails;
            useEffect(() => {
                createAPIEndpoint(ENDPIONTS.FOODITEM).fetchAll().then(res=>{
                    setFoodItems(res.data);
                    setSearchList(res.data);
                })
                .catch(error=>console.log(error))
        }, [])

        useEffect(() => {
            let x=[...foodItems];
            x = x.filter(y => {
                return y.foodItemName.toLowerCase().includes(searchKey.toLocaleLowerCase())
                 && orderedFoodItems.every(item=>item.foodItemId !=y.foodItemId)
                 //The Array.every() method returns true if all elements in an array pass a test (provided as a function).
                 //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_every  
            });
                setSearchList(x);
        }, [searchKey,orderedFoodItems ])
 const addFoodItem = foodItem => {
             let x = {
                orderMasterId: values.orderMasterId,
                orderDetailId: 0,
                foodItemId: foodItem.foodItemId,
                quantity: 1,
                foodItemPrice: foodItem.price,
                foodItemName: foodItem.foodItemName
            }

            //Set data in to existing array (getFreshModelObect) with orderDetails 
            setValues({
                ...values,
                orderDetails: [...values.orderDetails, x]
            })
            
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
       <list className={classes.listRoot}>
           {    
               searchList.map((item ,index)=>(
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
       </list>
       </>
    )
}
