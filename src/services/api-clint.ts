import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bffa4f670d8e4bbaa49c57383eb47eb4'
    }
})