import './assets/css/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { VoerkaI18nProvider } from '@voerkai18n/react'
import { i18nScope } from './languages'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VoerkaI18nProvider
      scope={i18nScope}
      fallback={<div>正在加载语言包...</div>}
    >
      <RouterProvider router={router} />
    </VoerkaI18nProvider>
  </React.StrictMode>
)
