<template>
    <v-form>
        <v-container>
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
                            <v-btn color="indigo" @click.stop="savePost" dark>Save</v-btn>
                            <v-btn text color="grey" to="/post/list" dark>Cancel</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import PostMixin from "@/components/mixins/PostMixin";

export default {
    mixins: [PostMixin],

    mounted() {
        setTimeout(() => {
            if (this.firstLoad) this.firstLoad = false;
            this.loading = false;
            this.resetPost;
        }, 1000);
    },

    data() {
        return {
            loading: true,
            firstLoad: true
        };
    },

    computed: {
        ...mapMutations({
            resetPost: "Post/RESET_POST"
        })
    }
};
</script>

<style>
</style>