import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import earth from '../images/earth.svg';
import greenFan from '../images/greenFan.svg';

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <div  className='earthNav'>
        <Link to="/">
          <img src={greenFan} alt='Rotating earth' className='earth' />

        </Link>
        <p className="P">Rotation</p>
        </div>
        <nav>

          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
              <input className='search'></input>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar