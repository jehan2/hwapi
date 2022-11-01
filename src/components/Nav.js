import React from 'react'
import Search from "./Search"
import CardsData from "./Data.json"
import {  Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li><h3>
            <Link to = "/Login">log-in</Link></h3></li>
          <li >Home</li>
          <li >
          <Link to="/Store">Store </Link>
          </li>
          <li>About</li>
          <li><Search data={CardsData}/></li>
        </ul>
      </nav>
        {/* <Search data={CardsData}/> */}
    </div>
  )
}

export default Nav