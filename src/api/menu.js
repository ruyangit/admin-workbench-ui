import request from '@/utils/request'

export function menuNav() {
    return request({
        url: 'https://randomuser.me/api',
        method: 'get'
    })
}
