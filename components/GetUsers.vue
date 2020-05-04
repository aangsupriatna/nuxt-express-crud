<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">_ID</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Created</th>
                    <th class="text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user._id">
                    <td>{{ user._id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.createdDate }}</td>
                    <td>
                        <v-btn
                            icon
                            :to="{
                                name: 'user-edit-id',
                                params: {
                                    _id: user._id
                                }
                            }"
                        >
                            <v-icon color="green" dark>mdi-file-document-edit</v-icon>
                        </v-btn>
                        <v-btn icon @click.stop="deleteUser(user)">
                            <v-icon color="red" dark>mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import UserMixin from "@/components/mixins/UserMixin";

export default {
    mixins: [UserMixin],

    async created() {
        await this.getUsers();
    },
}
</script>

<style>
</style>