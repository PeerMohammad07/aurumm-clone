import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"

function App() {
  const routes = createBrowserRouter([
    { 
      path : "/",
      element : <Home/>
    },
    {
      path : "/product",
      element : <Product/>  
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
