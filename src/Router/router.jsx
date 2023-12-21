
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../LayOut/LayOut';
import Home from '../Page/Home/Home';
import Cart from '../Page/Cart/Cart';

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/cart",
                element: <Cart></Cart>,
            }
        ]
    },
]);

export default router;