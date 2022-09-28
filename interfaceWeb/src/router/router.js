import Vue from "vue";
import Router from "vue-router";
import loginPage from "@/views/loginPage";
import mainPage from "@/views/View_Usuario/mainPage";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: loginPage
        },
        {
            path:"/mainPage",
            component: mainPage
        },
       
    ] 
})