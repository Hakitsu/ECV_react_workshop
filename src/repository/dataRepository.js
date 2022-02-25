import axios from "axios";
import { API_BASE_URL, ROUTES } from "../services/constants";

    const dataRepository = {
        async getCity(city){
            try{
                const listData = await axios.get(API_BASE_URL + ROUTES.WEATHER +"q="+ city + ROUTES.LANG + ROUTES.UNITS + ROUTES.TOKEN);
                return listData.data;
            } catch (err){
                console.log("Error : " + err);
            }
        },
        async getMyPos(lon,lat){
            try{
                const listData = await axios.get(API_BASE_URL + ROUTES.WEATHER +"lat="+lat+"&lon="+lon + ROUTES.LANG + ROUTES.UNITS + ROUTES.TOKEN);
                return listData.data;
            } catch (err){
                console.log("Error : " + err);
            }
        },
        async getSearch(city){
            try{
                const listData = await axios.get(API_BASE_URL + ROUTES.WEATHER + "q="+ city + ROUTES.LANG + ROUTES.UNITS + ROUTES.TOKEN);
                return listData.data;
            } catch (err){
                console.log("Error : " + err);
            }
        },
        async getWeatherForHours(lon,lat){
            try{
                const listData = await axios.get(API_BASE_URL +ROUTES.ONECALL + "lat="+lat+"&lon="+lon + ROUTES.EXCLUDE + ROUTES.LANG + ROUTES.UNITS + ROUTES.TOKEN);
                return listData.data;
            } catch (err){
                console.log("Error : " + err);
            }
        },
    };

export default dataRepository;