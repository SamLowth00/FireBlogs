<template>
  <div class="blog-card-wrap"> 
    <div class="blog-cards container"> 
        <div class="toggle-edit" v-if="admin">
            <span>Toggle Editing Post</span>
            <input type="checkbox" v-model="editPost">
        </div>
        <BlogCard v-for="(post,index) in blogPosts" :key="index" :post="post"/>
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
import { mapActions } from 'vuex';
export default {
    name: "Blogs",
    components:  {
        BlogCard
    },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts
        },
        editPost: {
            get() {
                return this.$store.state.editPost
            },
            set(payload) {
                this.setEditPost({value: payload})
            }
        },
        admin() {
            return this.$store.state.profileAdmin;
        }
    },
    beforeDestroy() {
        this.setEditPost({value: false})
    },
    methods: {
        ...mapActions({
            setEditPost: 'setEditPost'
        })
    }

}
</script>

<style lang="scss" scoped>
.blog-cards {
    position: relative; 
    .toggle-edit {
        display: flex; 
        align-items: center; 
        position: absolute;
        top: -70px;
        right: 0;

        span {
            margin-right: 16px;
        }
        input[type="checkbox"] {
            position: relative;
            border: none;
            appearance: none;
            --webkit-appearance: none;
            background: white;
            outline: none;
            width: 80px;
            height: 30px; 
            border-radius: 20px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
        input[type="checkbox"]:before {
            content: "";
            position: absolute; 
            width: 30px;
            height: 30px;
            border-radius: 50%;
            top: 0;
            left: 0;
            background: black;
            transform: scale(1.1);
            transition: 750ms ease all; 
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
        }
        input:checked[type="checkbox"]:before {
            background: white;
            left: 52px;
        }
    }
}
</style>