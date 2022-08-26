import React from 'react'

function Footer() {
    return (
        <footer>
            <div className='container'>   
                <div className='logo-icon'>
                    <div className='logo'>
                        <img src='/images/logo copy.svg' alt='img' />
                    </div> 
                </div>
                <div className='link'>
                    <ul>
                        <li className='active'>Features</li>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                    <ul>
                        <li className='active'>Resources</li>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                    <ul>
                        <li className='active'> Company</li>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='icon'>
                    <img src='./images/icon-facebook.svg' alt='img' />
                    <img src='./images/icon-twitter.svg' alt='img' />
                    <img src='./images/icon-pinterest.svg' alt='img' />
                    <img src='./images/icon-instagram.svg' alt='img' />
                </div>
            </div>
        </footer>
    )
}

export default Footer
