import React from 'react'
import './Project.css'

function Project() {
  return (
    <div className='row projects' id='projects'>
        <h3>Projects</h3>
        <div className='col-3 card '>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMNRJPGV-3YCMQlv2uDYNh0IkXQecCsr02NRPLpfRGg&s" alt="" />
         <h4 className='head'>BIG BITE</h4>
         <h6 className='head'>Website for restaurent created using HTML and Css</h6>
         <button className='but'><a href='https://nasweha.github.io/Restaurent-website/'>Live link</a></button>

        </div>
        
        <div className='col-3 card '>
         <img src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6421fcc7ed5d587f8d4944ae_641a14d2967ebaaefcae96d8_Screenshot-of-Know-to-Gos-website-with-an-aerial-shot-of-a-boat-crossing-the-sea_11zon.png" alt="" />
         <h4 className='head'>TRAVENTURE</h4>
         <h6 className='head'>Website for travel created using HTML and Css and Bootstrap</h6>
         <button className='but'><a href='https://singular-gaufre-2043b8.netlify.app'>Live link</a></button>
        </div>
        <div className='col-3 card '>
         <img src="https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1600" alt="" />
         <h4 className='head'>WEATHER APP</h4>
         <h6 className='head'>Website for weather forcasting created using HTML, Css, and js </h6>
         <button className='but'><a href='https://66209d4003f27df58f1e0652--glowing-raindrop-f291b1.netlify.app/'>Live link</a></button>
        </div>
         <div className='col-3 card '>
         <img src="https://i.ytimg.com/vi/7zQ35dmzjeE/maxresdefault.jpg" alt="" />
         <h4 className='head'>Registration form</h4>
         <h6 className='head'>Website for restaurent created using HTML, Css, js and react</h6>
         <button className='but'><a href='https://registration-form-react-nu.vercel.app/'>Live link</a></button>
        </div>
        
    </div>
  )
}

export default Project