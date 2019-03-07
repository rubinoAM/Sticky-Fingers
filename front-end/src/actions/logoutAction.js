import axios from 'axios';

export default (formData)=>{
    //console.log("Auth action running")
    console.log(formData)
    const axiosPromise = axios({
        url: `${window.apiHost}/logout`,
        method: 'GET',
        data: formData
    })
    return{
        type: "LOGOUT_ACTION",
        payload: axiosPromise
    }
}