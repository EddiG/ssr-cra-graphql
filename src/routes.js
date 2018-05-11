import AboutPage from 'components/AboutPage';
import HomePage from 'components/HomePage';
import PersonPage from 'components/PersonPage';

export default [
  {
    path: '/',
    exact: true,
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/person/:id',
    name: 'person',
    component: PersonPage,
  },
];
