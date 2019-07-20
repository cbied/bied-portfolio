import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
       <ul className="icons">
            <li><a href="https://www.linkedin.com/in/biedswebdev/" className="icon fa-linkedin" target='_blank'><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/cbied" className="icon fa-github"><span className="label" target='_blank'>GitHub</span></a></li>
          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
