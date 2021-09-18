import api  from "./api";

/*export const create =data=>{
    return {
        type:'create',
        payload:data
    }
}*/

export const ACTION_TYPE={
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

/*export const fetchAll =()=>{
    return dispatch=>{
   To make   web api request 
    }
}*/

const formatData=data=>({
    ...data,
    age:parseInt(data.age?data.age:0)
})
export const fetchAll =()=> dispatch=>{
     //Get API request 
     api.dCandidate().fetchAll()
     
     .then(res=>{
         debugger
          console.log("fetchAll response=>"+ JSON.stringify(+res))
        dispatch({
            type:ACTION_TYPE.FETCH_ALL,
            payload:res.data
        })
     }).catch(err=>console.log(err))
    }

export const create=(data,onSuccess)=>dispatch=>{
   data=formatData(data)
   api.dCandidate().create(data).then(res=>{
    console.log("create response=>"+ JSON.stringify(+res))
       dispatch({
           type:ACTION_TYPE.CREATE,
           payload:res.data
       })
       onSuccess()
   }).catch(err=>console.log(err))

}
let data={"dCandidateList":[{"id":1,"fullName":"Sunil","mobileNo":"9028147447","emailId":"sunil@gmail.com","age":35,"bloodGroup":"AB +ve","address":"Keshav nager"},{"id":2,"fullName":"Anil","mobileNo":"9028147447","emailId":"sunil@gmail.com","age":35,"bloodGroup":"AB +ve","address":"Keshav nager"},{"id":3,"fullName":"Suresh","mobileNo":"9028147447","emailId":"sunil@gmail.com","age":35,"bloodGroup":"AB +ve","address":"Keshav nager"},{"id":4,"fullName":"Ankush","mobileNo":"9028147447","emailId":"sunil@gmail.com","age":35,"bloodGroup":"AB +ve","address":"Keshav nager"},{"id":5,"fullName":"Robert","mobileNo":"9028147447","emailId":"sunil@gmail.com","age":35,"bloodGroup":"AB +ve","address":"Keshav nager"}]}
export const Update=(id,data,onSuccess)=>dispatch=>{
     data=formatData(data)
    debugger
    api.dCandidate().update(id,data)
    .then(res=>{
        debugger
        console.log("Update response=>"+ JSON.stringify(+res))
        dispatch({
            type:ACTION_TYPE.UPDATE,
            payload:{id,...data}
        })
        onSuccess()
    }).catch(err=>console.log(err))
  
  /*  dispatch({
        type:ACTION_TYPE.UPDATE,
        payload:{id,...data}
    })
*/
 }

 export const Delete=(id,onSuccess)=>dispatch=>{
    api.dCandidate().delete(id)
    .then(res=>{
        console.log("Delete response=>"+ JSON.stringify(+res))
        dispatch({
            type:ACTION_TYPE.DELETE,
            payload:id
        })
        onSuccess()
    }).catch(err=>console.log(err))
 
 }
 