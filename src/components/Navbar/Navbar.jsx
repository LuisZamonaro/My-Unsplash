import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { useAutentication } from "../../hooks/useAutentication" // fazer logout
import { useAuthValue } from "../../context/authContext" // pegar o valor do contexto
import { useContext, useState } from "react"
import { OpenContext } from "../../context/addPhotoContext"
import * as S from './styles'
import lupa from '../../images/magnifying-glass-svgrepo-com.svg'


const Navbar = () => {


  const [query, setQuery] = useState("")
  const { setOpenAddPhoto } = useContext(OpenContext)
  const { user } = useAuthValue()
  const { logout } = useAutentication()
  const navigate = useNavigate()
  const location = useLocation();

    const handleSubmit = (e) => {
      e.preventDefault()
  
      if(query) {
        navigate(`/search?q=${query}`)
      }
    }

  return (
    <S.Container>

      <S.LeftNavbar>
        <NavLink className="stylesMenu" to="/">
          <div className="myUnsplash">My Unsplash</div>
          <div className="devChallenges">devChallenges.io</div>
        </NavLink>
        {user && (
          <>
            <form onSubmit={handleSubmit}>
              <S.SearchInput onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search by name" />
              <S.SearchIcon>
                <img className="lupa" src={lupa} />
              </S.SearchIcon>
              <button className="btnSearch">Search</button>
            </form>
          </>
        )}
      </S.LeftNavbar>
      {user && (
        <S.RightNavbar>
          <>
            {location.pathname === '/' && (<button className="btnAdd" onClick={() => setOpenAddPhoto(prevState => !prevState)}>Add a photo</button>)}
            <div>
              <button className="btnLogout" onClick={logout}>Logout</button>
            </div>
          </>
        </S.RightNavbar>
      )}
      {!user && (
        <>
          <S.RightNavbar>
            <NavLink className="btnLogin" to="/login">Login</NavLink>
            <NavLink className="btnRegister" to="/register">Register</NavLink>
          </S.RightNavbar>
        </>
      )}
    </S.Container>
  )
}

export default Navbar