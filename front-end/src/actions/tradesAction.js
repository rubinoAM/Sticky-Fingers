import axios from 'axios';

export default (trades,auth)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/trades`,
        method: 'POST',
        data:{
            trades,
            auth,
        }
    })
    return{
        type: "TRADES_ACTION",
        payload: axiosPromise
    }
}