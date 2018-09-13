// import Cookies from 'js-cookie'
import api from '~a/index'
import { setStore, removeStore } from '~u/storage'

const state = {
    mobile:'',
    // checkMobile: {
    //     mobile: '',
    //     data: '',
    // },
}

const actions = {
    async ['logoutClean']({ commit, rootState: { route: { path } } }, config) {
        const { data: { code, data } } = await api.post('/auth/clean', { ...config })
        if (code === '0') {
            commit('removeAuthToken')
        }
    },

}

const mutations = {

    ['receiveAuthToken'](state, payload) {
        setStore('access_token', payload.access_token)
        setStore('expires_in', payload.expires_in)
        setStore('token_type', payload.token_type)
        // Cookies.set('token', payload.access_token, { expires: (payload.expires_in / 86400) });
    },
    ['removeAuthToken'](state) {
        removeStore('access_token')
        removeStore('expires_in')
        removeStore('token_type')
        // Cookies.remove('token')
    },
    ['receiveMobile'](state, payload) {
        state.mobile = payload;
    },
}

const getters = {
    ['getMobile'](state) {
        return state.mobile
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}