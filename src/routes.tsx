import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/home';
import { Sobre } from './pages/sobre';
import {Contato} from './pages/contato';
import { Produto } from "./pages/produto";
import { NotFound } from "./pages/notFound";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
{
    element: <Layout/>,
    children: [
        {
            path: '/',
            element: <Home/>
    },
    {
        path: '/sobre',
        element: <Sobre/>
    },
    {
        path: '/contato',
        element: <Contato/>
    },
    {
        path: '/produto/:id',  // Os dois pontos e o id, deixam essa rota dinâmica //
        element: <Produto/>
    },
    {
        path: '*',  // Erro 404. Essa tem de ser sempre a última rota ao preenceher aqui //
        element: <NotFound/>
    }
    ]
}

])

export {router}
