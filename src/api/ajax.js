// ajax请求函数模块
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {  //返回值为promise对象
    return new Promise(function (resolve, reject) {
        //执行异步ajax请求
        let promise
        if (type === 'GET') {
            let dataStr = ''
            //url地址拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //发送GET请求
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        promise.then((response)=>{
            resolve(response.data);
        }).catch((error)=>{
            reject(error)
        })
        //成功调用resolve()
        //失败调用reject()
    })

}