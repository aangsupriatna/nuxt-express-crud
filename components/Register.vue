<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
            <v-card>
                <v-card-title>Sign Up</v-card-title>
                <v-card-text>
                    <v-text-field
                        @input="setName($event)"
                        label="Username"
                        prepend-icon="mdi-account"
                    ></v-text-field>

                    <v-text-field @input="setEmail($event)" label="Email" prepend-icon="mdi-at"></v-text-field>
                    
                    <v-text-field
                        :type="show ? 'text' : 'password'"
                        @input="setPassword($event)"
                        label="Password"
                        prepend-icon="mdi-key-variant"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="show = !show"
                    ></v-text-field>

                    <v-select
                        v-on:change="setType($event)"
                        :items="types"
                        label="User Type"
                        prepend-icon="mdi-account-key"
                    ></v-select>
                </v-card-text>
                <v-card-actions class="pb-5 pr-4">
                    <v-spacer></v-spacer>
                    <v-btn @click.stop="signUp" color="indigo" dark>Sign Up</v-btn>
                </v-card-actions>
            </v-card>
            <v-card-subtitle align="center">
                Have an have account yet?
                <nuxt-link to="/login">Sign in</nuxt-link> here.
            </v-card-subtitle>
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations } from "vuex";
import UserMixin from "@/components/mixins/UserMixin";

export default {
    mixins: [UserMixin],

    data() {
        return {
            show: false,
            types: [
                { text: "Super Administrator" },
                { text: "Administrator" },
                { text: "User" }
            ]
        };
    },

    mounted() {
        this.resetUser;
    },

    computed: {
        ...mapMutations({
            resetUser: "User/RESET_USER"
        })
    }
}
</script>

<style>
</style>