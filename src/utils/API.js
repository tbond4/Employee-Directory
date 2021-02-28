import axios from "axios";


const url = "https://randomuser.me/api/";

const API = {
    getUsers:function(num){
        return axios.get(url + `?results=${num}`)
    }
}

export default API;