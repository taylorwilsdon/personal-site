import React from 'react'

import avatar from '../images/avatar.png';

const Header = (props) => (
    <header>
        <span className="avatar"><img src={avatar} alt="" /></span>
        <h2>Taylor Wilsdon</h2>
        <h4>corpeng @Yelp</h4>
    </header>
)


export default Header
