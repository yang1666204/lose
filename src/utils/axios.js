import axios from "axios"


export function get(url,params={}){
    return new Promise(function(resolve,reject){
        axios.get(url,{
            params
        }).then((res)=>{
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

export function del(url,params={}){
    return new Promise(function(resolve,reject){
        axios.delete(url,{
            params
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}