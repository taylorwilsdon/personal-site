import React from 'react'
import avatar from '../images/avatar.png';

const Header = (props) => (
    <header>
        <span className="avatar"><img src={avatar} alt="" /></span>
        <h1>Taylor Barrett-Wilsdon</h1>
        <p>@Yelp</p>
    </header>
)


export default Header
