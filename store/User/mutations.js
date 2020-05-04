import Vue from 'vue'

const mutations = {
    SET_USER(state, user) {
        state.user = user
    },

    SET_ID(state, _id) {
        Vue.set(state.user, '_id', _id)
    },

    SET_NAME(state, name) {
        Vue.set(state.user, 'name', name)
    },

    SET_EMAIL(state, email) {
        Vue.set(state.user, 'email', email)
    },

    SET_PASSWORD(state, password) {
        Vue.set(state.user, 'password', password)
    },

    SET_TYPE(state, type) {
        Vue.set(state.user, 'type', type)
    },

    SET_CREATED_DATE(state, date) {
        Vue.set(state.user, 'createdDate', date)
    },

    SET_UPDATED_DATE(state, date) {
        Vue.set(state.user, 'updatedDate', date)
    },

    RESET_USER(state) {
        state.user = {
            _id: "",
            name: "",
            email: "",
            password: "",
            type: "",
            createdDate: "",
            updatedDate: "",
        }
    },
}

export default mutations