<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link>
                <router-link to="/add" exact>写博客</router-link>
            </li>
            
        </ul>
    </nav>
    
</template>

<script>
export default {
    name:"blog-header"
    
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        text-align:center;
        margin: 0;
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color:rgb(58, 56, 56);
        text-decoration:none;
        padding:12px;
        border-radius:5px;
    }

    nav{
        background:rgb(255,255,255);
        padding:30px 0;
        margin-bottom: 40px;
        border-radius: 10px;
        box-shadow:0 15px 15px 15px rgb(244, 246, 248);
        text-align: center;
             
    }

    .router-link-active{
        background:rgb(248, 250, 252);
        color:rgb(51, 119, 255);
    }

</style>