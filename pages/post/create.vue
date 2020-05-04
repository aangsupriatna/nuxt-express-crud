<template>
    <v-container>
        <create-post></create-post>
    </v-container>
</template>

<script>
import CreatePost from "@/components/CreatePost";
export default {
    middleware: 'auth',
    
    components: {
        CreatePost
    },
    head() {
        return {
            title: "Create Post"
        };
    }
};
</script>

<style>
</style>