import React from 'react';
 


const About = () => {
  return (
    
      <section>
        <div className='about'>
          <container className='container'>
            <div className='section-title'>
              <h2>About</h2>
            </div>
            <div className='about-content grid'>
              <div className='about-image'>
                <img src={'./src/aboutImg.jpg'}alt = "aboutimage"/>
              </div>
            </div>
          </container>
        </div>

      </section>
    
  )
}

export default About