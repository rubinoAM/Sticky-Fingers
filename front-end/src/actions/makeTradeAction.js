import axios from 'axios';

export default ()=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/makeTrade`,
        method: 'POST',
    })
    return{
        type: "MAKE_TRADE_ACTION",
        payload: axiosPromise
    }
}