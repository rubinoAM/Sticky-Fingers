import axios from 'axios';

export default (formData,auth)=>{
    // console.log(formData)
    const axiosPromise = axios({
        url: `${window.apiHost}/users/addrecord`,
        method: 'POST',
        data: formData
    })
    return{
        type: "ADD_RECORD_ACTION",
        payload: axiosPromise
    }
}