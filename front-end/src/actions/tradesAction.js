import axios from 'axios';

export default ()=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/trades`,
        method: 'GET',
    })
    return{
        type: "TRADES_ACTION",
        payload: axiosPromise
    }
}