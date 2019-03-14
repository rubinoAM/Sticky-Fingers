import axios from 'axios';

export default (auth)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/community`,
        method: 'POST',
        data: {
            auth
        }
    })
    return{
        type: "COMMUNITY_ACTION",
        payload: axiosPromise,
    }
}