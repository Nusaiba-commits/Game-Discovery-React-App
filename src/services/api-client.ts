import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'40c2b3ddd61f4364b2de4ba92c723288'
    }
})