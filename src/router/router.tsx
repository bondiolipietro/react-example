import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Error } from '@/pages/Error'

const router = createBrowserRouter([
  {
    path: '*',
    element: <Error />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export { Router }
