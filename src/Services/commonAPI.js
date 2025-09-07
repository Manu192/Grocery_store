import axios from 'axios'

export const commonapi = (httprequest,url,reqdata)=>{
    const reqconfig={
        method: httprequest,
        url,
        data:reqdata
    }

    return axios(reqconfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}