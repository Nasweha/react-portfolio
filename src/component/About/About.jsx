import React from 'react'
import './About.css'
import nasi from '../../assets/my-p.jpeg'
import shape from '../../assets/shape7.png'

function About() {
  return (
    <section id='abouts'>
      <h3 style={{textAlign:"center", color:'#0ef ',marginTop:'60px' }}>About ME</h3>
      <div className='row about'>

        {/* <div className='all-details'> */}
        <div className='col-md-2'></div>
        <div className='col-md-4 '>
          <p className='para'> Enthusiastic Master's graduate in Computer Application, seeking an entry-level Front-End Developer
            role. Proficient in diverse front-end technologies, adept at blending aesthetics with functionality to
            craft engaging digital experiences. Eager to apply skills, learn from industry leaders, and contribute to
            innovative projects. Committed to delivering high-quality solutions, translating complex designs into
            intuitive interfaces to advance web technology.</p>
        </div>
        <div  className=' col-md-4 nasimg'>
          <img src={nasi} alt="" className='nasi' />
          <img src={shape} alt="" className='shape' />
        </div>
        <div className='col-md-2'></div>
        {/* </div> */}

      </div>
    </section>
  )
}

export default About