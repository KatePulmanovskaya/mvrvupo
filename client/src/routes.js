import UserPage from './pages/userPage'
import Statistics from './pages/statistics'
import Theory from './pages/theory'
import TheoryPage from './pages/theoryPage'
import Practice from './pages/practice'
import Main from './pages/main'
import Auth from './pages/auth'
import Tests from './pages/tests'
import Test from './pages/test'
import {USER_PAGE_ROUTE, STATISTICS_ROUTE, MAIN_ROUTE, PRACTICE_ROUTE, THEORY_ROUTE, TESTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from './utils/consts'

export const authRoutes = [
    {
        path: USER_PAGE_ROUTE,
        Element: UserPage
    },
    {
        path: STATISTICS_ROUTE,
        Element: Statistics
    },
    {
        path: TESTS_ROUTE + '/:id',
        Element: Test
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: Main
    },
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Element: Auth
    },
    {
        path: THEORY_ROUTE,
        Element: Theory
    },
    {
        path: THEORY_ROUTE + '/:id',
        Element: TheoryPage
    },
    {
        path: PRACTICE_ROUTE,
        Element: Practice
    },
    {
        path: TESTS_ROUTE,
        Element: Tests
    }
]