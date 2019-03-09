import axios from 'axios';

export default (auth)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/users/collection`,
        method: 'POST',
        data: {
            auth
        }
    })
    return{
        type: "COLLECTION_ACTION",
        payload: axiosPromise
    }
}