<template>
    <v-form>
        <v-container>
            {{ posty }}
            <v-row>
                <v-col>
                    <v-boilerplate
                        v-if="firstLoad"
                        :loading="loading"
                        class="mb-6"
                        type="article, actions"
                    ></v-boilerplate>
                    <v-card v-show="!firstLoad" flat>
                        <v-card-text>
                            <v-text-field
                                :value="post.title"
                                @input="setTitle($event)"
                                label="Post Title"
                                outlined
                            ></v-text-field>
                            <v-textarea
                                :value="post.content"
                                @input="setContent($event)"
                                label="Post Content"
                                outlined
                            ></v-textarea>
                        </v-card-text>
                        <v-card-actions class="pb-5">
                            <v-spacer></v-spacer>
                            <v-btn color="indigo" @click.stop="updatePost" dark>Save</v-btn>
                            <v-btn text color="grey" to="/post/list" dark>Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-snackbar v-model="snackbar" :timeout="timeout">
                {{ text }}
                <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
            </v-snackbar>
        </v-container>
    </v-form>
</template>

<script>
import PostMixin from "@/components/mixins/PostMixin";
export default {
    mixins: [PostMixin],

    asyncData() {
        return new Promise(resolve => {
            setTimeout(function() {
                resolve({ posty: "post" });
            }, 1000);
        });
    },

    data: () => ({        
        loading: true,
        firstLoad: true,
        snackbar: false,
        text: "Post has been updated.",
        timeout: 1000
    })
};
</script>

<style>
</style>