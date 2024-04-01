import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom"


export default function NavBar() {
  const navigate = useNavigate();
  useEffect(() => {
    // if (JSON.parse( localStorage.getItem('tokenUser')) ===null) {
    //       navigate(`/`);
    //  }  
  }, [])
  return (
    <div className='bg-danger'>
      <nav className='mb-5'>
        <ul className='d-flex list-unstyled align-items-center'>
          <li className='m-2'>
            <Link to="/" className='text-dark'>
              <img className='w-75' src='https://res.cloudinary.com/dbjxvogfh/image/upload/v1704702198/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2024-01-08_102254_dakgwg.png' />
            </Link>
          </li>
          <li className='m-5'>
            <Link to="/" className='text-dark'>Home</Link>
          </li>
          <li className='m-5'>
            <Link to="/listResort" className='text-dark'>all resort</Link>
          </li>
          <li className='m-5'>
            <li class="li" id="logout"><Link to="/" className='text-dark' onClick={() => { localStorage.clear() }}>LogOut</Link></li>
          </li>
          <li>
            <Link to="/account" className='text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
            </svg></Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </div>
  )
}
