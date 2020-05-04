const actions = {
    sendPost({ state }) {
        return new Promise(async (resolve, reject) => {
            try {
                let { data } = await this.$axios.post('/api/post', {
                        title: state.post.title,
                        content: state.post.content
                })

                resolve(data)

            } catch (error) {
                reject(error)
            }
        })
    },

    async getPost({ state = undefined }, _id) {
        return new Promise(async (resolve, reject) => {

            try {
                let { data } = await this.$axios.get('/api/post', {
                    params: { _id: _id }
                })

                resolve(data)

            } catch (error) {
                reject(error)
            }
        })
    },

    patchPost({ state }) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.$axios.patch('/api/post', {
                    _id: state.post._id,
                    title: state.post.title,
                    content: state.post.content
                })

                resolve()

            } catch (error) {
                reject(error)
            }
        })
    },

    deletePost({ state }) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.$axios.delete('/api/post', {
                    params: {
                        _id: state.post._id
                    }
                })

                resolve()

            } catch (error) {
                reject(error)
            }
        })
    }
}

export default actions