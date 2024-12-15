
import Home from './Components/Home'
import Errorpage from './Components/Errorpage';
import Store from './Components/Store';
import Productspage from './subsecs/Productspage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tables from './subsecs/Tables';
import Reserves from './subsecs/Reserves';


function App() {

  const router = createBrowserRouter([
    {path:'/',
      element:<Home/>
    },{
      path:'/Store',
      element:<Store/>,
      children:[{index:<Productspage/>,
                path:"Products",
                element:<Productspage/>
                },
                {
                path:"Tables",
                element:<Tables/>
                },{
                  path:"Reserves",
                  element:<Reserves/>
                }]
    },
    {
      path:"*",
      element:<Errorpage/>
    }])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
