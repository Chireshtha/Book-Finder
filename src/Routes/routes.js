import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../Pages/ErrorPage'
import HomePage from '../Pages/HomePage'
import FavoritePage from '../Pages/FavoritePage'
import AboutPage from '../Pages/AboutPage'
import BookList from '../Pages/BookList'





const routes = createBrowserRouter([
    {
        path: '/', element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/booklist', element: <BookList /> },
            { path: '/about' , element: <AboutPage /> }
        ]
    }
])

export default routes;