
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
// import Home from './Components/Home'
import Layout from './Components/Layout'
import Meals from './Components/Meals'
import Area from './Components/Area'
import Footer from './Components/Footer'
import Ingrediants from './Components/Ingrediants'
import Mealdetails from './Components/Mealdetails'
import Notfound from './Components/Notfound'




export default function App() {

  let routes= createBrowserRouter([{

  path:'/',element:<Layout></Layout>,children:[
     {index:true,element:<Meals></Meals>},
     
     {path:'/Footer',element:<Footer></Footer>},
     {path:'/Ingrediants',element:<Ingrediants></Ingrediants>},
     {path:'/Area',element:<Area></Area>},
     {path:'/Mealdetails/:id',element:<Mealdetails></Mealdetails>},


     { path: "*", element: <Notfound /> }






  ]

}])
return (
  <RouterProvider router={routes} />
    )
}

