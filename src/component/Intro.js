import React from 'react'

function Intro() {
    return (
        <section className='intro'>
            <div className='img'>
                <img  src='./images/illustration-working.svg' alt='intro' />
            </div>
            <div className='contianer'>
                <div className='text'>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights 
                        on how your links are performing.
                    </p>
                    <a className='btn'href='#home'>Get Started</a>
                </div>
            </div>
            
        </section>
    )
}


export default Intro;
