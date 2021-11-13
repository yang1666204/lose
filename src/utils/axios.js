import axios from "axios"

axios.interceptors.request.use((config)=>{
    const token=localStorage.getItem('atoken') || ''
    config.headers={
        "Content-Type":'application/json',
        "Authorization":token
    }
    return config
},(error)=>{
    return Promise.reject(error)
})
export function get(url,params){
    return new Promise(function(resolve,reject){
        axios.get(url,params).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export function post(url,data){
    return new Promise(function(resolve,reject){
        axios.post(url,data).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export function del(url,params){
    return new Promise(function(resolve,reject){
        axios.delete(url,params).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}