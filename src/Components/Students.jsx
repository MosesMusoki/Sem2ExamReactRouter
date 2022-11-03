import { Link, Outlet } from 'react-router-dom'


export const Students = () => {
  return (
    <>
    <div>
      <p>Here you'll find a list of students</p>
      <hr/>
      <input type='search' placeholder='Search students' />
    </div>
      <nav>
        <Link to='engineering'>Engineering</Link>
        <Link to='design'>Design</Link>
        <Link to='data'>Data</Link>       
      </nav>
      <Outlet />
    </>
  )
}