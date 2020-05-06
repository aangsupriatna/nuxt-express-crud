import { mapMutations } from 'vuex'
import debounce from 'lodash/debounce'

export default {
    components: {
        VBoilerplate: {
            functional: true,

            render(h, { data, props, children }) {
                return h(
                    "v-skeleton-loader",
                    {
                        ...data,
                        props: {
                            boilerplate: true,
                            ...props
                        }
                    },
                    children
                );
            }
        }
    },

    computed: {
        loadings: {
            get() {
                return this.$store.state.Loading.loading
            }
        },

        post: {
            get() {
                return this.$store.state.Post.post
            }
            // get() {
            //     setTimeout(() => {
            //         if (this.firstLoad) this.firstLoad = false;
            //         this.loading = false;
            //         return this.$store.state.Post.post
            //     }, 1000);                
            // }
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
            this.loading = true
            this.$store.dispatch("Loading/startLoading")
            console.log(this.loadings)
            this.$axios.get("/api/posts").then(result => {
                setTimeout(() => {
                    if (this.firstLoad) this.firstLoad = false
                    this.loading = false
                    this.posts = result.data
                    this.$store.dispatch("Loading/finishLoading")
                    console.log(this.loadings)
                }, 1000)
            })
        },

        updatePost: debounce(async function () {
            await this.$store.dispatch("Post/patchPost")
            // show the message
            this.$store.commit("Snackbar/show", "Post updated")
            this.$router.push("/post/list")
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