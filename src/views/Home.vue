<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen"/>
    <BlogPost v-for="(post,index) in blogPostFeed" :key="index" :post="post"/>
    <div class="blog-card-wrap"> 
      <div class="container"> 
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards"> 
          <BlogCard v-for="(post,index) in blogPostCards" :key="index" :post="post"/>
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates"> 
        <div class="container">
            <h2>never miss a post. Register for your free account today!</h2>
            <router-link class="router-button" to="#"> 
              Register for fireblogs <Arrow class="arrow arrow-light" />
            </router-link>
        </div>
      
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost: "Sams blog, with all thigs HTML,javascript, CSS ext, register to never miss a post",
        welcomeScreen: true, 
        photo: "coding"
      },
    }
  },
  computed: {
    blogPostCards() {
      return this.$store.getters.blogPostCards
    },
    blogPostFeed() {
      return this.$store.getters.blogPostFeed
    },
    user() {
        return this.$store.state.user;
    },
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex; 
    flex-direction: column;
    align-items: center; 
    @media(min-width: 800px) {
      padding: 125px 25px; 
      flex-direction: row;
    }
  }
  .router-button {
    display: flex;
    font-size: 14px; 
    text-decoration: none;
    @media(min-width: 800px) {
      margin-left: auto;

    }
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    max-width: 425px; 
    width: 100%;
    text-align: center; 
    text-transform: uppercase;
    @media(min-width: 800px) {
      text-align: initial; 
      font-size: 40px;
    }
  }
}
</style>