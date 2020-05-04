<template>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
            <v-card>
                <v-card-title>Log In</v-card-title>
                <v-card-text>
                    <v-text-field
                        label="Username"
                        prepend-icon="mdi-account"
                        @input="setName($event)"
                    ></v-text-field>
                    <v-text-field
                        type="password"
                        label="Password"
                        prepend-icon="mdi-key-variant"
                        @input="setPassword($event)"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions class="pb-5 pr-4">
                    <v-spacer></v-spacer>
                    <v-btn @click.stop="login" color="indigo" dark>Log In</v-btn>
                </v-card-actions>
            </v-card>
            <v-card-subtitle align="center">
                Don't have account yet?
                <nuxt-link to="register">Register</nuxt-link>here.
            </v-card-subtitle>
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex'
import UserMixin from "@/components/mixins/UserMixin"

export default {
    mixins: [UserMixin],

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