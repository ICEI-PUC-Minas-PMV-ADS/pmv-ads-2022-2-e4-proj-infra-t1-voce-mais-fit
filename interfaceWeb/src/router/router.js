import Vue from "vue";
import Router from "vue-router";
import loginPage from "@/views/Login/loginPage";
import mainPage from "@/views/View_Usuario/mainPage";
import treinoPage from "@/views/View_Treino/treinoPage"

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
        {
            path:"/treinoPage",
            component: treinoPage
        }, 
    ] 
})