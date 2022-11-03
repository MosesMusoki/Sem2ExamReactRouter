import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Navbar } from './Components/Navbar'
import { About } from './Components/About'
import { Profile } from './Components/Profile'
import { RequireAuth } from './Components/RequireAuth'
import { OrderSummary } from './Components/OrderSummary'
import { Students } from './Components/Students'
import { Data } from './Components/Data'
import { Engineering } from './Components/Engineering'
import { ErrorBoundary } from './Components/ErrorBoundary'
import { Login } from './Components/Login'
import { NotFound } from './Components/NotFound'
import { AuthProvider } from './Components/auth'

 
function App() {
  return (
    <>
 <AuthProvider>
    <Navbar />
      <ErrorBoundary>  
        <Routes>

        <Route path='/' element={<Home />}></Route>
  
      <Route path='about' element={<About />}></Route>
      <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='order-summary' element={<OrderSummary />}> 
      </Route>
      
//Implementing Nested routes 
      
      <Route path='students' element={<Students />}>
        <Route path='data' element={<Data />}/>
        <Route path='engineering' element={<Engineering />}/>
      </Route>

//Implementing 404 Error routing 
      <Route path='*' element={<NotFound />}></Route>
      </Routes>
  
        </ErrorBoundary>
     </AuthProvider>
  </>

  )
}

export default App;