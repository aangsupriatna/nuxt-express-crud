<template>
    <v-container>
        <get-users></get-users>
    </v-container>
</template>

<script>
import GetUsers from "@/components/GetUsers";
export default {
    middleware: 'auth',
    
    components: {
        GetUsers
    },
    head() {
        return {
            title: "User Administration"
        };
    }
};
</script>

<style>
</style>