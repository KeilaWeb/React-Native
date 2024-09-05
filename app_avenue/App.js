import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import DrawerNavigator from './src/navigation/DrawerNavigation';
import BottomTabs from './src/navigation/BottomTab';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={ queryClient }>      
      <DrawerNavigator />
    </QueryClientProvider>

    // <BottomTabs />
  );
};