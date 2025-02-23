import React from 'react'

import avatar from '../images/avatar.png'

import YelpLogo from './YelpLogo'

const Header = () => (
  <header className="site-header">
    <div className="header-content">
      <h2>taylor wilsdon</h2>
        <span className="avatar"><img src={avatar} alt="" /></span>
        <h5>corpeng @yelp {' '} <YelpLogo /></h5>
    </div>
  </header>
)

export default Header
