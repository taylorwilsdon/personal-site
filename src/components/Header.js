import React from 'react'

import avatar from '../images/avatar.png';

const Header = (props) => (
    <header>
        <h2>taylor wilsdon</h2>
        <span className="avatar"><img src={avatar} alt="" /></span>
        <h4>@yelp</h4>

    </header>
)


export default Header
