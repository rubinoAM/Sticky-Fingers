import axios from 'axios';

export default ()=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/friends`,
        method: 'GET',
    })
    return{
        type: "GET_FRIENDS_ACTION",
        payload: axiosPromise
    }
}