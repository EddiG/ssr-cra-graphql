import About from './About';
import Home from './Home';
import Person from './Person';

export default [
  {
    path: '/',
    exact: true,
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/person/:id',
    name: 'person',
    component: Person,
  },
];
