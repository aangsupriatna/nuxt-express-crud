export const state = () => ({
    snackbar: false,
    message: ""
})

export const mutations = {
    show(state, message) {
        state.message = message
        state.snackbar = true
    },

    toggle(state) {
        state.snackbar = !state.snackbar
    },

    add(state, message) {
        state.message = message
    }
}

export const getters = {
    get(state) {
        return state.message
    }
}
