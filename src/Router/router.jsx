
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../LayOut/LayOut';
import Home from '../Page/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
            path: "/",
      element: <Home></Home>,
        }
      ]
    },
  ]);

export default router;