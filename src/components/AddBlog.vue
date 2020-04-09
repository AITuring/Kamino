<template>
    <div id="add-blog">
        <h1>添加博客</h1>
        <form v-if="!submitted">
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required>

            <div id="author">
                <label>作者</label>
                <select v-model="blog.author">
                    <option v-for="author in authors" :key="author">{{author}}</option>
                </select>
            </div>
            
            <div id="checkboxes">
                <div class="temp">
                    <p>博客分类</p>
                </div>
                <label>Vue</label>
                <input type="checkbox" value="Vue" v-model="blog.categories">
                <label>React</label>
                <input type="checkbox" value="React" v-model="blog.categories">
                <label>Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories">
                <label>Angular</label>
                <input type="checkbox" value="Angular" v-model="blog.categories">
            </div>

            
            <div class="temp">
                    <p>博客内容</p>
                </div>
            <textarea v-model="blog.content"></textarea>

            
            <button @click.prevent="post">添加博客</button>
        </form>
        <div v-if="submitted">
            <h3>博客添加成功！</h3>
        </div>
        <div id="preview">
            <h3>博客预览</h3>
            <div class="temp2">
                <p>博客标题：</p>
            </div>
            <p>{{blog.title}}</p>

            <div class="temp2">
                <p>作者:</p>
            </div>
            <p>{{blog.author}}</p>
            <div class="temp2">
                <p>博客分类：</p>
            </div>
            <ul>
                <li v-for="category in blog.categories" :key="category">
                    {{category}}
                </li>
            </ul>
            <div class="temp2">
                <p>博客内容：</p>
            </div>
            <p>{{blog.content}}</p>
            
            
        </div>
    </div>
</template>

<script>
export default {
    name:'add-blog',
    data(){
        return{
            blog: {
                title:"",
                content:"",
                categories: [],
                author:""
            },
            authors:["Turing","Xyz","Haaa"],
            submitted:false
        }
    },
    methods:{
        post: function(){
            this.$http.post("https://jsonplaceholder.typicode.com/posts",{
                title: this.blog.title,
                body: this.blog.content,
                userId:1
            })

            .then(function(data){
                console.log(data);
                this.submitted=true
            });

        }
        
    }
}
</script>


<style scoped>
    #add-blog *{
        box-sizing: border-box;
        
    }

    #add-blog{
        margin:20px auto;
        max-width: 600px;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow:15px 15px 15px -15px rgb(244, 246, 248),
             -15px 0 15px 15px rgb(244, 246, 248),
             15px 0 15px -15px rgb(244, 246, 248),
             -15px 0 15px -15px rgb(244, 246, 248);
    }

    h1{
        text-align: center;
        color: crimson;
    }

    #author{
        display: inline;
        padding:20px;
        color:#6d6565;
    
        
    }

    label{
        color:#6d6565;
    }

    input[type="text"]textarea,select{

        display:block;
        width:100%;
        padding:8px;

    }

    textarea{
        height: 200px;
        width: 100%;
    }

    #checkboxes{
        padding: 20px 0;
        right: 0px;
    }

    #checkboxes label{
        display:inline-block;
        margin-top: 0;
        
    }
    .temp{
        padding: 10px 0;
        color:#6d6565;
    }

    #checkboxes input{
        display:inline-block;
        margin-right: 10px;
    }

    button{
        display:block;
        /* margin:20px 0; */
        background:crimson;
        color:#ffffff;
        border:0;
        padding:14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
        margin:0 auto;
        width:100px;
    }

    #preview{
        padding:10px 20px;
        border:1px dotted #ccc;
        margin: 30px 0;
    }

    h3{
        margin-top: 10px;
        text-align: center;
        color:crimson;
    }

    .temp2{
        display:block;
        font-weight:bold;
        color:#6d6565;

    }

</style>