import axios from 'axios'
import { message, Modal } from "ant-design-vue";
import qs from 'qs';

// create an axios instance
const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000, // request timeout
    // responseType: "json",
    // crossDomain: true,
    // xhrFields: { withCredentials: true },
    // headers: { 'X-Requested-With': 'XMLHttpRequest' },
    // headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    // }
})

// request interceptor
service.interceptors.request.use(config => {
    // Do something before request is sent
    // if (getCookies(_CONST.TOKEN)) {
    //     config.headers['Authorization'] = 'Bearer ' + getCookies(_CONST.TOKEN) // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
    // }

    // 在发送请求之前做某件事
    if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
    ) {
        // 序列化
        config.data = qs.stringify(config.data);
    }
    // console.log('config', config);
    return config
}, error => {
    // Do something with request error
    // console.log('error', error) // for debug
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
    response => {
        // message.success('数据通讯完成', 1);
        const { data } = response;
        if (data) {
            return data
        }
        return Promise.reject(response);
    },
    error => {
        /**
        * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
        * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
        */
        // console.log('error', error)
        const res = error.response;
        //    console.log(res);

        if (res && res.data) {
            const { code, error, error_description } = res.data;
            // console.info(code)
            // console.info(error)
            // console.info(error_description)
            // 100401:非法的token; 100412:其他客户端登录了;  100413:Token 过期了;
            if (code === 100401 || code === 100412 || code === 100413) {
                // MessageBox.confirm('操作失败，原因：' + error + '，可以取消继续留在该页面，或者重新登录', '操作提示', {
                //     confirmButtonText: '重新登录',
                //     cancelButtonText: '取消',
                //     type: 'warning'
                // }).then(() => {
                //     removeCookies(_CONST.TOKEN);
                //     location.reload();// 为了重新实例化vue-router对象 避免bug
                // })
            } else {
                let error;
                if (!error) {
                    error = "请求失败，异常： " + res.statusText + ' [' + res.status + ']';
                }
                message.error(error, 5);
            }
        } else {
            message.error("请求失败，" + error, 5);
        }
        return Promise.reject(error)
    })

export default service