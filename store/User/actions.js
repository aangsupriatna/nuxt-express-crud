const actions = {
    signUp({ state }) {
        return new Promise(async (resolve, reject) => {
            try {
                let { data } = await this.$axios.post('/api/user', {
                    name: state.user.name,
                    email: state.user.email,
                    password: state.user.password,
                    type: state.user.type,
                    createdDate: this.$moment().format(),
                    updatedDate: "",
                })

                resolve(data)
                // this.$router.push("/sign-in")
            } catch (error) {
                reject(error)
            }
        })
    },

    login({ state }) {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await this.$auth.loginWith("local", {
                    data: state.user
                })

                resolve(response)

            } catch (error) {
                reject(error)
            }
        })
    },

    getUser({ state = undefined }, _id) {
        return new Promise(async (resolve, reject) => {

            try {
                let { data } = await this.$axios.get('/api/user', {
                    params: { _id: _id }
                })

                resolve(data)

            } catch (error) {
                reject(error)
            }
        })
    },

    patchUser({ state }) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.$axios.patch('/api/user', {
                    _id: state.user._id,
                    name: state.user.name,
                    email: state.user.email,
                    password: state.user.password,
                    type: state.user.type,
                    updatedDate: this.$moment().format()
                })

                resolve()

                // this.$router.push("/user/list")

            } catch (error) {
                reject(error)
            }
        })
    },

    deleteUser({ state }) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.$axios.delete('/api/user', {
                    params: {
                        _id: state.user._id
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