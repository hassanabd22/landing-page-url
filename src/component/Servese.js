import React from 'react'

function Servese() {
    return (
        <section className='serves'>
                <div className='abs-input' style={{ 
            backgroundImage: `url("/images/bg-boost-desktop.svg")` 
                }}>
                    <div className='input-container'>
                    <input type='text' placeholder='Shorten a link here...' />
                    </div>
                    
                    <a className='btn' href='#home'>Shorten It!</a>
                </div>
                <div className='text'>
                    <h2>Advanced Statistics</h2>
                    <p className='prge'>Track how your links are performing across the web with our 
                        advanced statistics dashboard.
                    </p>
                </div>
                <div className='box'>
                    <div className='cart one'>
                        <div className='imag'>
                            <img src='./images/icon-brand-recognition.svg' alt='img-card' />
                        </div>
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t 
                            mean a thing. Branded links help instil confidence in your content.
                        </p>
                    </div>
                    <div className='cart tow'>
                        <div className='imag'>
                            <img src='./images/icon-detailed-records.svg' alt='img-card' />
                        </div>
                        <h3>Brand Recognition</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where 
                            people engage with your content helps inform better decisions.
                        </p>
                    </div>
                    <div className='cart thire'>
                        <div className='imag'>
                            <img src="./images/icon-fully-customizable.svg" alt="brand"/>
                        </div>
                        <h3> Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable 
                            links, supercharging audience engagement.</p>
                    </div>
                </div>
        </section>
    )
}

export default  Servese;
