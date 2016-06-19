import IndexComponent from '../components/Index.vue';
import AboutComponent from '../components/About.vue';
import LoginComponent from '../components/Login.vue';
import NotFoundComponent from '../components/404.vue';

export function configRouter(router) {
  router.map({
    '/': {
      component: IndexComponent,
    },
    '/about': {
      component: AboutComponent,
    },
    '/login': {
      component: LoginComponent,
    },
    '*': {
      component: NotFoundComponent,
    },
  });
}
