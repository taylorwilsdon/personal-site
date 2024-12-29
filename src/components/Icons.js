import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Icons = (props) => (
    <footer>
    <ul className="icons">
      <li>
        <a href="https://github.com/taylorwilsdon">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/taylorwilsdon/">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/taylorbarrettwilsdon/">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </li>
    </ul>
  </footer>
)

export default Icons
