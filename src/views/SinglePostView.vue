<template>
    <div>
        <h1>Post</h1>
     <div class="form">
          <input type="text" placeholder="title" v-model="title">
          <textarea  placeholder="content" v-model="content"></textarea>
          <input type="datetime" placeholder="XXXX-XX-XXTXX:XX:XX" v-model="date">
          <button  @click="updatePost">Edit</button> 
          <button @click="deletePost">Delete</button>    
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "",
            content: "",
            date: ""
        }
    },
    created() {
        const id = this.$route.params.id

        fetch('http://localhost:5214/api/Post/' + id)
        .then(data => data.json())
        .then(post => {
            this.title = post.title,
            this.content = post.content,
            this.date = post.date

        })

    },
    methods: {
        updatePost(){
            const post = {
                title: this.title,
                content: this.content, 
                date: this.date
            }
          const id = this.$route.params.id

          fetch('http://localhost:5214/api/Post/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
          })
          .then( () => 
          {
            this.$router.push('/posts')
          })
        },
        deletePost() {
            const id = this.$route.params.id

            fetch('http://localhost:5214/api/Post/' + id, 
            {
                method: 'DELETE'
            })
            .then(() => {
                this.$router.push('/posts')
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