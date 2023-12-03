import { createRouter, createWebHistory } from 'vue-router';
import LoGin from '../components/LoGin.vue';
import HoMe from '../components/HoMe.vue';
import SearCh from '../components/SearCh.vue';
import LoaDing from '../components/LoaDing.vue';
import RePort from '../components/RePort.vue';
import JoIn from '../components/JoIn.vue';
import ManaGement from '../components/ManaGement.vue';
import MaP from '../components/MaP.vue';

const routes = [
  {
    path: "/LoGin",
    component: LoGin, 
  },
  {
    path: "/",
    component: HoMe, 
  },
  {
    path: "/SearCh",
    component: SearCh, 
  },
  {
    path: "/LoaDing",
    component: LoaDing, 
  },
  {
    path: "/RePort",
    component: RePort, 
  },
  {
    path: '/join',
    name: 'Join',
    component: JoIn,
  },
  {
    path: "/ManaGement",
    component: ManaGement, 
  },
  {
    path: "/MaP",
    component: MaP, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
