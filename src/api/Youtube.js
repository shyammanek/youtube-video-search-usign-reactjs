import axios from "axios";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults: 7,
        key:'AIzaSyCJ_bWNQJCQlqQTY3NehHZMTt-OUgJ-8rk'
    }
    
})