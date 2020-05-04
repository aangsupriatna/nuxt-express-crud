<template>
    <v-container class="fill-height" fluid>
        <register></register>
    </v-container>
</template>

<script>
import Register from '@/components/Register'

export default {
    layout: "clean",
    
    head: {
        title: "Please Register"
    },

    components: {
        Register
    },

    // created() {
    //     if (this.$auth.$state.loggedIn) {
    //         this.$router.replace({ name: "post-list" });
    //     }
    // }

}
</script>

<style>
</style>