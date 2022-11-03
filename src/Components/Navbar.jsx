import { Link } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {

  const auth = useAuth()
  
  return (
    <nav className='primary-nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/students'>Students</Link>
      <Link to='/profile'>Profile</Link>
      {
        !auth.user && (
          <Link to='/login'>Login</Link>
        )
      }
    </nav>
  )
}