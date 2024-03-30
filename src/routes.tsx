import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import { Contato } from './pages/contato';
import { Produto } from './pages/produto';

import { Erro } from './pages/erro';

const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />
    },

    {
        path: '/sobre',
        element: <Sobre />
    },

    {
        path: '/contato',
        element: <Contato />
    },

    {
        path: '/produto/:id',
        element: <Produto />
    },

    {
        path: '*',
        element: <Erro />
    }
])

export { router };