<template>
    <div>
    <h1>Posts</h1>
      <PostList :key="postKey" />

      <div class="form">
        <h4>Add post</h4>
        <input type="text" placeholder="title" v-model="title">
        <textarea placeholder="content" v-model="content">
            </textarea>
        <input type="datetime" placeholder="XXXX-XX-XXTXX:XX:XX" v-model="date">
        <button @click="savePost()"> Submit</button>
      </div>
    </div>
</template>
<script>
import PostList from '../components/PostList.vue'
export default {
    components: {
        PostList
    },
    data(){
     return {
         title: "",
         content: "",
         date: "",
         postKey: 0
         
     }
    },
    methods: {
        savePost(){
            const post = {
                title: this.title,
                content: this.content,
                date: this.date
            }

            fetch('http://localhost:5214/api/Post', {
                method: 'POST',
                body: JSON.stringify(post),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(() => {
                this.postKey++
            })
        

        }
    }
    

}
</script>
<style scoped>
.form {
    display:flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    gap: 15px;
}
</style>