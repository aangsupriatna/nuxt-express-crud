<template>
    <v-container class="fill-height" fluid>
        <login></login>
    </v-container>
</template>

<script>
import Login from "@/components/Login";
export default {
    layout: "clean",

    head: {
        title: "Please Log In"
    },

    components: {
        Login
    },

    created() {
        if (this.$auth.$state.loggedIn) {
            this.$router.push({ name: "post-list" })
        }
    }
}
</script>

<style>
</style>