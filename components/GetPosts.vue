<template>
    <div>
        <v-skeleton-loader v-if="firstLoad" :loading="loading" type="table"></v-skeleton-loader>
        <v-simple-table v-show="!firstLoad">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">_ID</th>
                        <th class="text-left">Title</th>
                        <th class="text-left">Content</th>
                        <th class="text-left">Created</th>
                        <th class="text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post._id">
                        <td>{{ post._id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.content }}</td>
                        <td>{{ post.createdDate }}</td>
                        <td>
                            <v-btn
                                icon
                                :to="{
                                name: 'post-edit-id',
                                params: {
                                    _id: post._id
                                }
                            }"
                            >
                                <v-icon color="green" dark>mdi-file-document-edit</v-icon>
                            </v-btn>
                            <v-btn icon @click.stop="deletePost(post)">
                                <v-icon color="red" dark>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import PostMixin from "@/components/mixins/PostMixin";

export default {
    mixins: [PostMixin],

    async created() {
        await this.getPosts()
    },

    data() {
        return {
            loading: true,
            firstLoad: true
        };
    }
};
</script>

<style>
</style>