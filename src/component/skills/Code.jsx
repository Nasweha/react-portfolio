import React from 'react'
import { Skills } from '../Data';
import { CircularProgressbar } from 'react-circular-progressbar';
import './Skill.css'


const Code = ()=> {
  return (
    <>
    
     {Skills.map(({ title, percentage}, index) =>{
      return(
       
         
        <div className='row project' id='skill'>
          
          <div className=' col-md-3 code ' key={index}>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMNRJPGV-3YCMQlv2uDYNh0IkXQecCsr02NRPLpfRGg&s" alt="" />
       <h4 className='head'>BIG BITE</h4>
       <h6 className='head'>Website for restaurent created using HTML and Css</h6>
       <button className='but'>Live link</button> */}
  
            <CircularProgressbar className='bars' strokeWidth={7.5} text={`${percentage}`}
              value={percentage}
            />
            <h6 className='skill__title'>{title}</h6>
  
  
          </div>
  
          {/* <div className='col-3 card '>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMNRJPGV-3YCMQlv2uDYNh0IkXQecCsr02NRPLpfRGg&s" alt="" />
       <h4 className='head'>TRAVENTURE</h4>
       <h6 className='head'>Website for travel created using HTML and Css and Bootstrap</h6>
       <button className='but'>Live link</button>
      </div>
      <div className='col-3 card '>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMNRJPGV-3YCMQlv2uDYNh0IkXQecCsr02NRPLpfRGg&s" alt="" />
       <h4 className='head'>WEATHER APP</h4>
       <h6 className='head'>Website for weather forcasting created using HTML, Css, and js </h6>
       <button className='but'>Live link</button>
      </div>
       <div className='col-3 card '>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMNRJPGV-3YCMQlv2uDYNh0IkXQecCsr02NRPLpfRGg&s" alt="" />
       <h4 className='head'>Registration form</h4>
       <h6 className='head'>Website for restaurent created using HTML, Css, js and react</h6>
       <button className='but'>Live link</button>
      </div> */}
  
        </div>
       
          );
       })}

    </>
  );
};

export default Code