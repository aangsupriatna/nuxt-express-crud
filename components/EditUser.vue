<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col>
                    <v-card flat>
                        <v-card-text>
                            <v-text-field
                                :value="user.name"
                                @input="setName($event)"
                                label="User Name"
                                outlined
                            ></v-text-field>
                            <v-textarea
                                :value="user.email"
                                @input="setEmail($event)"
                                label="User Email"
                                outlined
                            ></v-textarea>
                            <v-select
                                :value="user.type"
                                v-on:change="setType($event)"
                                :items="types"
                                label="User Type"
                                prepend-icon="mdi-account-key"
                            ></v-select>
                        </v-card-text>
                        <v-card-actions class="pb-5">
                            <v-spacer></v-spacer>
                            <v-btn color="indigo" @click.stop="updateUser" dark>Save</v-btn>
                            <v-btn text color="grey" to="/user/list" dark>Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import UserMixin from "@/components/mixins/UserMixin"
export default {
    mixins: [UserMixin],

    data: () => ({
        snackbar: false,
        text: "Post has been updated.",
        timeout: 1000,
        show: false,
        types: [
            { text: "Super Administrator" },
            { text: "Administrator" },
            { text: "User" }
        ]
    })
};
</script>

<style>
</style>