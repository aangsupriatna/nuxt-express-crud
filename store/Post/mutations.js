import Vue from 'vue'

const mutations = {
    SET_POST(state, post) {
        state.post = post
    },

    SET_ID(state, _id) {
        Vue.set(state.post, '_id', _id)
    },

    SET_TITLE(state, title) {
        Vue.set(state.post, 'title', title)
    },

    SET_CONTENT(state, content) {
        Vue.set(state.post, 'content', content)
    },

    RESET_POST(state) {
        state.post = {
            _id: '',
            title: '',
            content: ''
        }
    }
}

export default mutations