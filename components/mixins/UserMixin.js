import { mapMutations } from 'vuex'
import debounce from 'lodash/debounce'

export default {
    computed: {
        user: {
            get() {
                return this.$store.state.User.user
            }
        },

        users: {
            get() {
                return this.$store.state.Users.users
            },
            set(users) {
                this.$store.commit("Users/SET_USERS", users)
            }
        }
    },

    methods: {
        async getUsers() {
            this.loading = true
            await this.$axios.get("/api/users").then(result => {
                setTimeout(() => {
                    if (this.firstLoad) this.firstLoad = false
                    this.loading = false
                    this.users = result.data
                }, 1000)
            })
        },

        login: debounce(async function () {
            await this.$store.dispatch("User/login")
            this.$router.push({ name: 'post-list' })
        }, 1000),

        signUp: debounce(async function () {
            await this.$store.dispatch("User/signUp").then(this.$router.push({ name: "login" }))
        }, 1000),

        updateUser: debounce(async function () {
            this.setUpdatedDate(this.$moment().format())
            await this.$store.dispatch("User/patchUser")
            // show the message
            this.$store.commit("Snackbar/show", "User updated")
            this.$router.push({ name: "user-list" })
        }, 1000),

        deleteUser: debounce(async function (user) {
            this.setUser(user);
            await this.$store.dispatch("User/deleteUser");
            this.getUsers();
        }, 1000),

        ...mapMutations({
            setUser: "User/SET_USER",
            setName: "User/SET_NAME",
            setEmail: "User/SET_EMAIL",
            setPassword: "User/SET_PASSWORD",
            setType: "User/SET_TYPE",
            setCreatedDate: "User/SET_CREATED_DATE",
            setUpdatedDate: "User/SET_UPDATED_DATE"
        })
    }
}