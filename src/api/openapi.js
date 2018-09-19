import request from '@/utils/request'

export function users(params) {
    return request({
        url: 'https://randomuser.me/api',
        method: 'get',
        params
    })
}
