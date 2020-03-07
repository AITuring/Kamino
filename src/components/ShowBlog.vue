<template>
    <div class="show-blog">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            <article>{{blog.body | snippet}}</article>
        </div>
    </div>
</template>

<script>
export default {
    name:'show-blog',
    data(){
        return{
            blogs: [],
            search:""
        }
    },
    created(){
        
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data){
            console.log(data);
            this.blogs=data.body.slice(0,10);
        })

    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
        
    },
    filters:{
            "to-uppercase":function(value){
                return value.toUpperCase();
            },
            
            Snippet(value){
                return value.slice(0,100)+"...";

            }
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
    #show_blog{
        max-width: 800px;
        margin:0 auto;
    }

    h1{
        text-align: center;
        color:crimson;
    }

.single-blog{
    padding:20px;
    margin: 20px 0;
    display: table-cell;            
    vertical-align: middle; 
    max-width: 600px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 10px;
    box-shadow:15px 15px 15px -15px rgb(244, 246, 248),
             -15px 0 15px 15px rgb(244, 246, 248),
             15px 0 15px -15px rgb(244, 246, 248),
             -15px 0 15px -15px rgb(244, 246, 248);
}

</style>