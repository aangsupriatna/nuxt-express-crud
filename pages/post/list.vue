<template>
    <v-container>
        <get-posts></get-posts>
    </v-container>
</template>

<script>
import GetPosts from "@/components/GetPosts";
export default {
    middleware: 'auth',

    components: {
        GetPosts
    },
    
    head() {
        return {
            title: "Administration"
        };
    }
};
</script>

<style>
</style>