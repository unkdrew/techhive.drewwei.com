import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://www.facebook.com/DreezyWei" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/unkdrew" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/drew-wei" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/unkdrew" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; {new Date().getFullYear()} Drew Wei</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
