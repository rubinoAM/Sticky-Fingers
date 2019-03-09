import axios from 'axios';

export default (auth)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/friends`,
        method: 'POST',
        data: {
            auth
        }
    })
    return{
        type: "GET_FRIENDS_ACTION",
        payload: axiosPromise
    }
}