import { users } from '@/api/openapi'

const state = {
    loading: false,
    users: {
        data: [],
        pagination: {
            showSizeChanger: true,
        }
    }
}

const actions = {
    ['getUsers']({ commit, state }, config) {
        state.loading = true
        return new Promise((resolve, reject) => {
            users(config).then(response => {
                // console.log(response);
                commit('setUsers', {
                    ...response,
                    config
                })
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

    ['setUsers'](state, { results, config }) {
        state.users = {
            data: results,
            pagination: {
                total: 200,
                pageSize: config.results
            }
        }
        // console.log(state.users.pagination)
    }

}

const getters = {
    ['getUsers'](state) {
        return state.users;
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