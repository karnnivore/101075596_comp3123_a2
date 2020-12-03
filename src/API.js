import axios from "axios";

export default axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=3ec447546b00e21f3d79c5f5167d121a",
  responseType: "json"
});
