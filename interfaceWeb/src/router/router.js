import Vue from "vue";
import Router from "vue-router";
import startPage from "@/views/startPage";
import mainPage from "@/views/View_Usuario/mainPage";
import treinoPage from "@/views/View_Treino/treinoPage";
import loginPage from "@/views/Login/loginPage";
import registerUserPage from "@/views/Register/registerUserPage"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: startPage
        },
        {
            path:"/mainPage",
            component: mainPage
        },
        {
            path:"/treinoPage",
            component: treinoPage
        }, 
        {
            path:"/loginPage",
            component: loginPage
        }, 
        {
            path:"/registerUserPage",
            component: registerUserPage
        }, 
    ] 
})