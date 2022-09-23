import Vue from "vue";
import Router from "vue-router";
import loginPage from "@/views/loginPage"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: loginPage
        },
       
    ] 
})