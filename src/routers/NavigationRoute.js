import { LandingPage } from '../pages/LandingPage';
import NewsHub from '../pages/NewsHub';
import LoginPage from '../pages/LoginPage';
import routes from './route';
import UserProfile from '../pages/UserProfile'

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
        name: 'profile',
        path: routes.PROFILE,
        component: UserProfile,
    },
    {
        name: 'login',
        path: routes.LOGIN,
        component: LoginPage,
    },
]
