import './assets/main.css';
import { createRouter,createWebHistory } from 'vue-router';

import { createApp } from 'vue'
import App from './App.vue';
import Archive from './component/routing/Archive.vue';
import Notes from './component/routing/Notes.vue';
import Trash from './component/routing/Trash.vue';

const app = createApp(App);
const routes=[
    {path:'/', name:'notes', component:Notes},
    {path:'/archive',name:'archive', component:Archive},
    {path:'/trash',name:'trash', component:Trash}
];

const router=createRouter({
    history:createWebHistory(),
    routes
})

app.use(router);

app.mount('#app');
