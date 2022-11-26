import React, { lazy, ReactNode, Suspense } from 'react'

import type { RouteObject } from 'react-router-dom'

import Loading from '@/components/Loading'
import AppLayout from '@/layouts/AppLayout'

const Home = lazy(() => import('@/pages/Home'))

const List = lazy(() => import('@/pages/List'))

const Form = lazy(() => import('@/pages/Form'))

const Detail = lazy(() => import('@/pages/Detail'))

const Page403 = lazy(() => import('@/pages/403'))

const Page404 = lazy(() => import('@/pages/404'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export const routers: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: lazyLoad(<Home />)
      },
      {
        path: '/list',
        element: lazyLoad(<List />)
      },
      {
        path: '/form',
        element: lazyLoad(<Form />)
      },
      {
        path: '/detail',
        element: lazyLoad(<Detail />)
      },
      {
        path: '/403',
        element: lazyLoad(<Page403 />)
      },
      {
        path: '/404',
        element: lazyLoad(<Page404 />)
      },
      {
        path: '*',
        element: lazyLoad(<Page404 />)
      }
    ]
  }
]
