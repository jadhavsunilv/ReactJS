import axios from "axios";
//WeatherForecast

const BASE_URL = 'http://localhost:36971/api/';  
export const ENDPIONTS = {
    CUSTOMER: 'Customer',
    FOODITEM: 'FoodItem',
    ORDER: 'Order'
}
export  default {
    customerApi(endpoint=ENDPIONTS.CUSTOMER){
      debugger
      let url = BASE_URL + endpoint ;
        return{

            fetchAll:()=>axios.get(url),
            fetchById:id =>axios.get(url+id),
            create: newRecord=>axios.post(url,newRecord),
            update:( updateRecord)=>axios.put(url ,updateRecord), //No need id
            delete:(id)=>axios.delete(url+id)

        }
    }
}