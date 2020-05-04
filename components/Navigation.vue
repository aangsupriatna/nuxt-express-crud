<template>
    <div>
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item to="/post/list">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/post/create">
                    <v-list-item-action>
                        <v-icon>mdi-file</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Create Post</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/user/list">
                    <v-list-item-action>
                        <v-icon>mdi-file</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Users</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Nuxt.js API CRUD</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" text>
                        <v-icon class="pr-2">mdi-account-circle</v-icon>
                        User
                    </v-btn>
                </template>
                <v-list class="py-0">
                    <v-list-item to="/login">
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/register">
                        <v-list-item-title>Register</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item @click="$auth.logout()">
                        <v-list-item-title><v-icon class="mr-2">mdi-login-variant</v-icon>Sign-out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: null
    })
};
</script>

<style>
</style>