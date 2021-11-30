import axios from "axios";

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '364f8f0416425b0fe63517980e1a6e39';

export const getWeatherData = async (cityname) => {


    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;

    }catch(error){
        throw error;
    }
}