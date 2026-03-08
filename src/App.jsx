import React from 'react'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Setup from './pages/Setup/Setup'
import History from './pages/HistoryPage/History'
import { UserWaterProvider , DailyWaterProvider ,NotificationProvider} from './context/Watercontext'
import { createBrowserRouter,createRoutesFromElements ,Route , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home/>} >
      <Route path='setting' element={<Setup/>} />
      <Route index element={ <Dashboard/>}/>
      <Route path='history' element={<History/>}/>
    </Route>
  )
)

function App() {
  return (
    <div>
      <UserWaterProvider>
        <DailyWaterProvider>
          <NotificationProvider>
            <RouterProvider router={router} />
          </NotificationProvider>
        </DailyWaterProvider>
      </UserWaterProvider>
    </div>
  )
}

export default App
