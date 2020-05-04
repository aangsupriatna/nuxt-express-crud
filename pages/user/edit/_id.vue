<template>
    <v-container>
        <edit-user v-if="user._id"></edit-user>
    </v-container>
</template>

<script>
import EditUser from "@/components/EditUser";

export default {
    middleware: 'auth',
    
    head() {
        return {
            title: "Edit User"
        };
    },

    components: {
        EditUser
    },

    async fetch({ store, params }) {
        let user = await store.dispatch("User/getUser", params._id);
        store.commit("User/SET_USER", user);
    },

    computed: {
        user: {
            get() {
                return this.$store.state.User.user;
            }
        }
    }
};
</script>

<style>
</style>