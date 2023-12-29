import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Contact from './routes/Contact.jsx'

//1 - Configurando route
import {
  createBrowserRouter, RouterProvider, Route, Navigate
} from "react-router-dom"

//2 Página de erro
import ErrorPage from './routes/ErrorPage.jsx'

//3 - Componente base
import Home from './routes/Home.jsx'

//7 - Rota dinâmica
import Product from './routes/Product.jsx'

//8 - Nested route
import Info from './routes/Info.jsx'

//9 - Search
import Search from './routes/Search.jsx'



const  router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  // 3 - Componente base
  children: [
    {
      path: "/",
      element: <Home/>,
    },{
      path: "contact",
      element: <Contact/>,
    },
    //7 - Rota dinâmica
    {
      path: "products/:id",
      element: <Product/>,
    },
    //8 - nested route
    {
      path: "/products/:id/info",
      element: <Info></Info>
    },
    //9 - Search
    {
      path: "search",
      element: <Search/>,
    },
    //10 - Redirect
    {
      path: "teste",
      element: <Navigate to="/"/>
    }

  ],
},/* {
  path:"contact",
  element:<Contact/>,
} */
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
