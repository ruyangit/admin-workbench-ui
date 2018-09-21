const state = {
    defaultSettings: {},
    BasicLayoutSpinning: true,
    ChangeLayoutCollapsed: false
}
//dispatch
const actions = {
    ['defaultSettings']({ commit, state }, config) {
        commit('UpdateDefaultSettings', {
            config
        })

        // state.loading = true
        // return new Promise((resolve, reject) => {
        //     users(config).then(response => {
        //         // console.log(response);
        //         commit('setUsers', {
        //             ...response,
        //             config
        //         })
        //         state.loading = false
        //         resolve()
        //     }).catch(error => {
        //         state.loading = false
        //         reject(error)
        //     })
        // })
    },
}
//commit
const mutations = {
    ['UpdateBasicLayoutSpinning'](state, payload) {
        state.BasicLayoutSpinning = payload
    },
    ['UpdateChangeLayoutCollapsed'](state, payload) {
        state.ChangeLayoutCollapsed = payload
    },
    ['UpdateDefaultSettings'](state, payload) {
        let localSettingsKey = '_settings'
        if(payload.config === true){
            window.localStorage.setItem(localSettingsKey, JSON.stringify(state.defaultSettings))
        }else{
            const settings = window.localStorage.getItem(localSettingsKey)
            if (settings) {
                state.defaultSettings = JSON.parse(settings)
            } else {
                state.defaultSettings = payload
            }
            window.localStorage.setItem(localSettingsKey, JSON.stringify(state.defaultSettings))
        }
    },
}

const getters = {
    ['settings'](state) {
        return state.defaultSettings
    },
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
