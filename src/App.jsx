
import './App.css'
import About from './component/About/About'
import Contact from './component/Contact/Contact'

import Home from './component/Home/Home'
import Project from './component/Project/Project'
// import Skill from './component/skills/Skill'

import Code from './component/skills/Code'
// import Ability from './component/skills/Ability'


function App() {


  return (
    < >
      <header>
        <div className='container m-auto px-4 py-6'>
          <div className='navbar'>
            <div >
              <h1 className='text-light hea' style={{fontFamily:'cursive'}}>NST</h1>
            </div>
            <div>
              <ul className='item gap-5'>
                <li>
                  <a href="#home" className='text-light each-item'>Home</a>
                </li>
                <li>
                  <a href="#abouts" className='text-light each-item'>About</a>
                </li>
                <li>
                  <a href="#projects" className='text-light each-item'>Projects</a>
                </li>
                <li>
                  <a href="#skill" className='text-light each-item'>Skills</a>
                </li>

                <li>
                  <a href="#contact" className='text-light each-item'>Contact me</a>
                </li>
              </ul>


              {/* <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link " aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Projects</a>
        <a class="nav-link" href="#">Skills</a>
        <a class="nav-link" href="#">Contact</a>
        
      </div>
    </div>
  </div>
</nav> */}
            </div>

          </div>
        </div>
      </header>

      <Home/>
      <About/>
      <Project/>
     <div className='skill'>
      <h3 className='section__subtitle subtitle__center'>SKILLS</h3>

      <div className='skill__container grid'>
      
      <Code/>
      </div>
      
       </div>
    
  <Contact/>
    </>
  )
}

export default App
