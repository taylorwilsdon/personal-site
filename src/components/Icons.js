import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ICON_STYLE = { width: 20, height: 20, marginRight: 8 }

const Icons = (props) => (
  <footer>
    <ul className="icons">
      <li>
        <a href="https://github.com/taylorwilsdon">
          <FontAwesomeIcon icon={faGithub} style={ICON_STYLE} /> Github
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/taylorwilsdon/">
          <FontAwesomeIcon icon={faInstagram} style={ICON_STYLE} /> Instagram
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/taylorbarrettwilsdon/">
          <FontAwesomeIcon icon={faLinkedin} style={ICON_STYLE} /> LinkedIn
        </a>
      </li>
    </ul>
  </footer>
)

export default Icons
