import { mapMutations } from 'vuex'
import debounce from 'lodash/debounce'

export default {
    computed: {
        post: {
            get() {
                return this.$store.state.Post.post
            }
        },

        posts: {
            get() {
                return this.$store.state.Posts.posts;
            },
            set(posts) {
                this.$store.commit("Posts/SET_POSTS", posts);
            }
        }
    },

    // watch: {
    //     post: {
    //         handler() {
    //             // this.isLoading = true
    //             if (this.post.title || this.post.content) this.updatePost()
    //         },

    //         deep: true
    //     }
    // },

    methods: {
        async getPosts() {
            let { data } = await this.$axios.get("/api/posts");
            // console.log(data)
            this.posts = data;
        },

        updatePost: debounce(async function () {
            await this.$store.dispatch("Post/patchPost")
        }, 1000),

        savePost: debounce(async function () {
            await this.$store.dispatch("Post/sendPost")
        }, 1000),

        deletePost: debounce(async function (post) {
            this.setPost(post);
            await this.$store.dispatch("Post/deletePost");
            this.getPosts();
        }, 1000),

        ...mapMutations({
            setTitle: 'Post/SET_TITLE',
            setContent: 'Post/SET_CONTENT',
            setPost: "Post/SET_POST"
        })
    }
}