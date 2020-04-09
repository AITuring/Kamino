import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
export default[
    {
        path:"/",
        component:ShowBlog
    },
    {
        path: "/add",
        component:AddBlog
    },
    {
        // 单独展示某一篇文章
        path:"/blog/:id",
        component:SingleBlog
    }
]