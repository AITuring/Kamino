<template>
  <div id="app">
    <!-- <add-blog></add-blog>
    <show-blog></show-blog> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/addBlog.vue'
import ShowBlog from './components/ShowBlog.vue'
import BlogHeader from './components/BlogHeader.vue'


export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlog,
    BlogHeader

  }
}
</script>

<style>
  .body{
    padding: 0;
    margin: 0;
  }
  #app{
    /*  */
    background: rgb(248, 250, 252);
  }


</style>
