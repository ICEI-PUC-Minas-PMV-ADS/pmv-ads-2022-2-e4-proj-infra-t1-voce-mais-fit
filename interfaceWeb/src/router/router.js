import Vue from "vue";
import Router from "vue-router";
import startPage from "@/views/startPage";
import mainPage from "@/views/View_Usuario/mainPage";
import treinoPage from "@/views/View_Treino/treinoPage";
import loginPage from "@/views/Login/loginPage";
import registerUserPage from "@/views/Register/registerUserPage";
import registerPersonal from "@/views/Register/registerPersonal";
import UserConfig from "@/views/User_Config/UserConfigPage";
import SobrePage from "@/views/Sobre_Page/SobrePage";
import SobrePageTrainer from "@/views/Sobre_Page/SobrePageTrainer";
import infoAlunoPage from "@/views/View_Treino/infoAlunoPage";
import userConfigPageTrainer from "@/views/User_Config/userConfigPageTrainer"

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
            path:"/mainPageTraner",
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
        {
            path:"/registerPersonal",
            component: registerPersonal
        },
        {
            path:"/userconfig",
            component: UserConfig
        },
        {
            path:"/sobrepage",
            component: SobrePage
        },
        {
            path:"/SobrePageTrainer",
            component: SobrePageTrainer
        },
        {
            path: "/infoAlunoPage",
            component: infoAlunoPage
        },
        {
            path:"/trainerConfig",
            component: userConfigPageTrainer
        },
    ] 
})