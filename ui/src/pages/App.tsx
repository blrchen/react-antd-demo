import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

import AzureMsal from '@/components/AzureMsal'
import conig from '@/config'
import { Routers } from '@/routes'

const queryClient = new QueryClient()

const App = () => {
  return (
    <AzureMsal enable={conig.AZURE_ENABLE}>
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </AzureMsal>
  )
}

export default App
