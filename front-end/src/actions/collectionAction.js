import axios from 'axios';

export default (formData)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/collection`,
        method: 'GET',
        data: formData
    })
    return{
        type: "COLLECTION_ACTION",
        payload: axiosPromise
    }
}