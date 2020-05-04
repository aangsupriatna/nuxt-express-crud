<template>
    <v-snackbar v-model="snackbar" :timeout="timeout" top>
        {{ message }}
        <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
</template>

<script>
export default {
    data() {
        return {
            timeout: 2000
        }
    },
    computed: {
        message: {
            get() {
                return this.$store.state.Snackbar.message
            }
        },

        snackbar: {
            get() {
                return this.$store.state.Snackbar.snackbar
            },

            set() {
                return this.$store.commit("Snackbar/toggle")
            }
        }
    }
}
</script>

<style>
</style>