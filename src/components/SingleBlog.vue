<template>
    <div id="single-blog">
        <h2 v-rainbow>{{blog.title}}</h2>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get("https://jsonplaceholder.typicode.com/posts"+ "/"+this.id)
        .then(function(data){
            // console.log(data);
            this.blog=data.body;
        })
    },
    directives:{
        'rainbow':{
            bind(el,binging,vnode){
                el.style.color="#"+Math.random().toString(16).slice(2,8);
            }
        }
    }
    
}
</script>

<style scoped>
    #single-blog{
        max-width:960px;
        margin:0 auto;
        padding: 10px; 
        background: white;
        border-radius: 20px;
        box-shadow:15px 15px 15px -15px rgb(244, 246, 248),
             -15px 0 15px 15px rgb(244, 246, 248),
             15px 0 15px -15px rgb(244, 246, 248),
             -15px 0 15px -15px rgb(244, 246, 248);
    }

</style>