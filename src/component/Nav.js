import React, { useState} from 'react';

function Nav() {
    const [show , setShow] = useState(false);
    return (
        <nav>
            <div className='contianer'  >
                <div className='head' >
                    <img src='./images/logo.svg' alt='logo' className='logo'/>
                    <div className='togle' onClick={() => setShow(!show)} >
                        <img src='./images/icon-hamburger.svg' alt='hamb'  onClick={() => console.log("Goal!")} />
                    </div>
                </div>
                <div className= {`${show  ? 'show links':'links'} `} >
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                    <div className='log-sign'>
                        <a href='#login' className='login' >Login</a>
                        <a className='btn' href='#home'>Sign Up</a>
                    </div>  
                </div>

                
            </div>
        </nav>
    )
}

export default  Nav;
