import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchBar from '../searchBar/SearchBar'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div className='header'>
      <div className='headerLeft'>
        <Link to="/"><img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
        <Link to="/movies/popular" style={{ textDecoration: 'none' }}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{ textDecoration: 'none' }}><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{ textDecoration: 'none' }}><span>UpComming</span></Link>

      </div>
      <div className='loginright'>
        <SearchBar />
        {/* log in log out by auth0 react */}
        {
          isAuthenticated ? (
            <div className='menu-bar'>
            <ul>
            <li><a href="#">{user.name}<i className="fas fa-caret-down"></i></a>
              <div className="dropdown-menu">
                <ul>
                  <li><a href="#">Your Watchlist</a></li>
                  <li><a href="#"></a><button className='b' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Sign Out
                  </button></li>
                </ul>
              </div>
            </li>
            </ul>
            </div>

          ) : (
            <button className='loginbutton' onClick={() => loginWithRedirect()}>Sign In</button>
          )
        }

      </div>
    </div>
  )
}

export default Header

{/* //   <button className='loginbutton' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        //   Sign Out
        // </button> */}