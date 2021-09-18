import axios from "axios";
//WeatherForecast
const baseURL="http://localhost:26318/";

export  default {
    dCandidate(url=baseURL+"WeatherForecast"){
      debugger
        return{

            fetchAll:()=>axios.get(url),
            fetchById:id =>axios.get(url+id),
            create: newRecord=>axios.post(url,newRecord),
            update:( updateRecord)=>axios.put(url ,updateRecord), //No need id
            delete:(id)=>axios.delete(url+id)

        }
    }
}