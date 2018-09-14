
const state = {
    Setting: {
    },
    BasicLayoutSpinning: true,
    ChangeLayoutCollapsed: false
}
//dispatch
const actions = {
    // async ['getHomeData']({ commit, rootState: { route: { path } } }, config) {
    //     const { data: { code, data } } = await api.get('/home/data', { ...config })
    //     if (data && code === '0') {
    //         commit('receiveHomeData', {
    //             ...config,
    //             ...data,
    //         })
    //     }
    // },
}
//commit
const mutations = {
    ['UpdateBasicLayoutSpinning'](state, payload) {
        state.BasicLayoutSpinning = payload
    },
    ['UpdateChangeLayoutCollapsed'](state, payload) {
        state.ChangeLayoutCollapsed = payload
    },
}

const getters = {
    ['getBasicLayoutSpinning'](state) {
        return state.BasicLayoutSpinning
    },
    ['getChangeLayoutCollapsed'](state) {
        return state.ChangeLayoutCollapsed
    },
}

export default {
    actions,
    state,
    mutations,
    getters
}
