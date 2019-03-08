import axios from 'axios';

export default (auth)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/community`,
        method: 'POST',
        data: {
            auth
        }
    })
    // const axiosPromise = axios.post(`${window.apiHost}/users/community`,auth,null);

    return{
        type: "COMMUNITY_ACTION",
        payload: axiosPromise,
    }
}