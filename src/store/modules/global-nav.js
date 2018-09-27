import { menuNav } from '@/api/menu'

//从服务端获取
const mock = [
    {
        "id": "1044886626813353984",
        "parentId": "0",
        "name": "dashboard",
        "path": '/dashboard',
        "icon": 'dashboard',
        "leaf": false,
        "children": [{
            "id": "1044886629921333248",
            "parentId": "1044886626813353984",
            "name": "analysis",
            "path": '/dashboard/analysis',
            "leaf": true,
            "children": []
        },{
            "id": "1044886629921333248",
            "parentId": "1044886626813353984",
            "name": "workplace",
            "path": '/dashboard/workplace',
            "leaf": true,
            "children": []
        }]
    },
    {
    "id": "1044886626813353984",
    "parentId": "0",
    "name": "system",
    "path": '/system',
    "icon": 'setting',
    "leaf": false,
    "children": [{
        "id": "1044886629921333248",
        "parentId": "1044886626813353984",
        "name": "setting",
        "path": "/system/setting",
        "leaf": false,
        "children": [{
            "id": "1044886630026190848",
            "parentId": "1044886629921333248",
            "name": "menu",
            "path": "/system/setting/menu",
            "leaf": true,
            "children": []
        }, {
            "id": "1044886630122659840",
            "parentId": "1044886629921333248",
            "name": "module",
            "path": "/system/setting/module",
            "leaf": true,
            "children": []
        }]
    },{
        "id": "1044886629921333248",
        "parentId": "1044886626813353984",
        "name": "role",
        "path": "/system/role",
        "leaf": true,
    },{
        "id": "1044886629921333248",
        "parentId": "1044886626813353984",
        "name": "admin",
        "path": "/system/admin",
        "leaf": true,
    }]
}]

const state = {
    loading: false,
    menuNav: {
        data: []
    }
}

const actions = {
    ['getMenuNav']({ commit, state }, config) {
        state.loading = true
        return new Promise((resolve, reject) => {
            menuNav().then(response => {
                // console.log(mock);
                commit('setMenuNav', mock)
                state.loading = false
                resolve()
            }).catch(error => {
                state.loading = false
                reject(error)
            })
        })
    },
}

const mutations = {

    ['setMenuNav'](state, payload) {
        state.menuNav = {
            data: payload
        }
    }

}

const getters = {
    ['getMenuNav'](state) {
        return state.menuNav;
    },
    ['loading'](state) {
        return state.loading;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}