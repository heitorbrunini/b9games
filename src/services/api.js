import axios from "axios";

const api = axios.create({
    baseURL:'https://free-to-play-games-database.p.rapidapi.com/api/games'
})

export default api;