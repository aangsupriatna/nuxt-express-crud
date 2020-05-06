export const state = () => ({
    loading: false,
    firstLoad: false
})

export const mutations = {
    SET_LOADING(state, loading){
        state.loading = loading
        state.firstLoad = loading
    }
}

export const actions = {
    startLoading({ commit }) {
        commit('SET_LOADING', true);
    },

    finishLoading({ commit }) {
        commit('SET_LOADING', false);
    },
}