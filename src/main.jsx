import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Acard from './components/pages/lading.jsx'
import SignIn from './components/pages/signIn.jsx'
import './index.css'
import Register from './components/pages/register.jsx'
import Publish from './components/pages/publish.jsx'
import Dashboardpage from './components/pages/dashboard.jsx'
import SendMessages from './components/pages/sendMessages.jsx'
import Registeradmin from './components/pages/registeradmin.jsx'
import { AuthProvider } from './provider/authprovider.jsx'
import GuestRoute from './provider/guestroute.jsx'
import PrivateRoutes from './provider/privateroutes.jsx'
import Statistics from './components/pages/statistic.jsx'
import Works from './components/pages/works.jsx'
import Comptes from './components/pages/comptes.jsx'
import UserProfile from './components/pages/userprofile.jsx'
import Logout from './components/pages/logout.jsx'
import Myoeuvres from './components/pages/myoeuvres.jsx'
import Oeuvretypeweb from './components/filter/oeuvretypeweb.jsx'
import Oeuvretypemobile from './components/filter/oeuvretypemobile.jsx'
import Oeuvretypewordpress from './components/filter/oeuvretypewordpress.jsx'
import Oeuvretypewireframe from './components/filter/oeuvretypewireframe.jsx'
import Oeuvretypeprotype from './components/filter/oeuvretypeprotype.jsx'



const router = createBrowserRouter (
  [
    {
      path:"/sign-in",
      element:(
        <GuestRoute>
          <SignIn />
        </GuestRoute>
      )
    },
    {
      path:"/sign-up",
      element:<Register />
    },
    {
      path:"/sign-admin",
      element:<Registeradmin />
    },
    {
      path:"/dashboard",
      element:(
        <PrivateRoutes>
          <Dashboardpage />
        </PrivateRoutes>
      ),
      children:[
        {
          path:"",
          element:<Statistics />   
        },
        {
          path:"works",
          element:<Works />
        },
        {
          path:"yourWorks",
          element:<Myoeuvres />
        },
        {
          path:"comptes",
          element:<Comptes />
        },
        {
          path:"publish",
          element:<Publish />
        },
        {
          path:"userprofile",
          element:<UserProfile />
        },
        {
          path:"logout",
          element:<Logout />
        }
      ]
    },
    {
      path:"/email-message",
      element:<SendMessages />
    },
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Acard />
        },
        {
          path:"/web",
          element:<Oeuvretypeweb />
        },
        {
          path:"/mobile",
          element:<Oeuvretypemobile />
        },
        {
          path:"/wordpress",
          element:<Oeuvretypewordpress />
        },
        {
          path:"/wireframe",
          element:<Oeuvretypewireframe />
        },
        {
          path:"/prototype",
          element:<Oeuvretypeprotype />
        },
        {
          path:"/filter",
          element:<h1>Filter...</h1>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /> 
    </AuthProvider>
  </React.StrictMode>,
)
