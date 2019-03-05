import axios from 'axios';

export default ()=>{

    const axiosPromise = axios({
        url: `${window.apiHost}/collection`,
        method: 'GET',
    })
    return{
        type: "COLLECTION_ACTION",
        payload: axiosPromise
    }
}