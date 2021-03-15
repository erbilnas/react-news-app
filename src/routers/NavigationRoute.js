import { LandingPage } from '../pages/LandingPage';
import NewsHub from '../pages/NewsHub';
import LoginPage from '../pages/LoginPage';
import routes from './route';

export const NavigationRoute = [
    {
        name: 'home',
        path: routes.HOME,
        component: LandingPage,
    },
    {
        name: 'news',
        path: routes.NEWS,
        component: NewsHub,
    },
    {
        name: 'login',
        path: routes.LOGIN,
        component: LoginPage,
    },
]
