<template>
    <v-container>
        <edit-post v-if="post._id"></edit-post>
    </v-container>
</template>

<script>
import EditPost from "@/components/EditPost";

export default {
    middleware: 'auth',
    
    head() {
        return {
            title: "Edit"
        };
    },

    components: {
        EditPost
    },

    async fetch({ store, params }) {
        let post = await store.dispatch("Post/getPost", params._id).then(data => {
            store.commit("Post/SET_POST", data);
        })
    },

    computed: {
        post: {
            get() {
                return this.$store.state.Post.post;
            }
        }
    }
};
</script>

<style>
</style>