import axios from 'axios';

export default (friendInfo)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/people/:id`,
        method: 'POST',
        data: friendInfo,
    })
    return{
        type: "FRIENDS_INFO_ACTION",
        payload: axiosPromise
    }
}