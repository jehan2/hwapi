import React from 'react'
import Search from "./Search"
import CardsData from "./Data.json"
function Nav() {
  return (
    <div>
        <Search data={CardsData}/>
    </div>
  )
}

export default Nav