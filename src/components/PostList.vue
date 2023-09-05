<template>
<div>
    <h4>Post List</h4>
    <div v-for="post in posts" :key="post.id">
       <router-link :to="'/posts/' + post.id">{{post.title}}</router-link>
    </div>
</div>
</template>
<script>
export default {
    name: 'PostList',
    data(){
        return {
            posts: []
        }
    },

    created() {
        fetch('http://localhost:5214/api/Post')
          .then(data => data.json())
          .then(posts => {
            this.posts = posts;
          })

    }
}
</script>