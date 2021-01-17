import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return <body>
    
    <nav className="navbar-right fixed-top navbar-expand-lg navbar d-flex justify-content-end">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#home">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-me">ABOUT ME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">SKILLS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="header-wrapper" id="home">
      
      <section className="hero is-full-height">

        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="hero-sub">{"Hi, I'm"}</h2>
            <h1 className="hero-title">Sean</h1>
            <h2 className="hero-sub">A Full-Stack Software Engineer</h2>
          </div>
        </div>
      </section>
    </div>

    <section className="section-light about-me" id="about-me">
      <div className="container">
        <h1 className="title has-text-centered section-title">About Me</h1>
        <div className="columns is-multiline">
          <div
            className="column has-vertically-aligned-content about-me-content"
            data-aos="fade-right"
          >
            <p className="about-me-text">My name is Sean.</p>
            <br />
            <p className="about-me-text">I am a highly energetic software developer. Personally and professionally, I am driven by a sense of freedom and have a passion for adventure. This led me to leave behind the world of in vitro-diagnostics in pursuit of a career epitomised by innovation, creativity and a desire to push boundaries. I’m looking to start my career as a full-stack developer in a creative and bold organisation bringing my optimistic and unflappable attitude.</p>
            <br />
            <div className="is-divider"></div>
            
          </div>
          <div className="column image-container" data-aos="fade-left">
            <img
              className="is-rounded headshot"
              src="https://i.imgur.com/1x4VxuN.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section skills" id="skills">
      <h1 className="title has-text-centered skills-title">SKILLS</h1>
      <div className="container icons">
        <div className="columns is-multiline is-mobile is-centered">
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-babel-plain icon"></i>
            <div className="icon-name">Babel</div>
          </div>
          <div className="column is-one-sixth-desktop is-3-mobile icon-column">
            <i className="devicon-css3-plain icon" />
            <div className="icon-name">CSS3</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-git-plain icon" />
            <div className="icon-name">Git</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-github-original icon" />
            <div className="icon-name">GitHub</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-heroku-plain icon" />
            <div className="icon-name">Heroku</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-html5-plain icon" />
            <div className="icon-name">HTML5</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-javascript-plain icon" />
            <div className="icon-name">JavaScript</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-mongodb-plain icon" />
            <div className="icon-name">MongoDB</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-mysql-plain icon" />
            <div className="icon-name">mySQL</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-nodejs-plain icon" />
            <div className="icon-name">NodeJS</div>
          </div>
          <div className="column is-one-sixth-desktop is-3-mobile icon-column">
            <i className="devicon-npm-original-wordmark icon" />
            <div className="icon-name">npm</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-postgresql-plain icon" />
            <div className="icon-name">PostgreSQL</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-python-plain icon" />
            <div className="icon-name">Python</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-react-original icon" />
            <div className="icon-name">React</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-sass-original icon" />
            <div className="icon-name">SASS</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-visualstudio-plain icon" />
            <div className="icon-name">Visual Studio</div>
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-webpack-plain icon" />
            <div className="icon-name">Webpack</div>
          </div>


        </div>
      </div>
    </section>
    
    <section className="projects" id="projects">
      <div className="container">
        <h1 className="title project-title">PROJECTS</h1>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src="https://i.imgur.com/COQx3PO.png" alt="" />
              <div className="overlay">
                <h1>Space Invaders</h1>
                <h2>A simple, single page ode to the classic arcade game built using HTML, JS and CSS</h2>
                <a className="info" href="https://github.com/seanfenelon/project-1">GitHub</a>
                <a className="info" href="https://seanfenelon.github.io/project-1/">Live</a>
              </div>
            </div>
          </div>
          
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src="https://i.imgur.com/A6n74jkh.png" alt="" />
              <div className="overlay">
                <h1>The Movie Guru</h1>
                <h2>Your go-to site for all these movies. React and Express were the foundation of this 48-hour, pair-programming hackathon!</h2>
                <a className="info" href="https://github.com/seanfenelon/project-2">GitHub</a>
                <a className="info" href="https://seanfenelon.github.io/project-2/">Live</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src="https://i.imgur.com/0tM10O2.png" alt="" />
              <div className="overlay">
                <h1>Skii</h1>
                <h2>A full-stack web application for an interactive exploration of the worlds ski resorts using React, Express, MongoDB and NodeJS</h2>
                <a className="info" href="https://github.com/seanfenelon/Project-3">GitHub</a>
                <a className="info" href="https://project-3-ski-sean.herokuapp.com/">Live</a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-8 col-xs-12">
            <div className="hovereffect">
              <img className="img-responsive" src="https://i.imgur.com/saTGWJWh.png" alt="" />
              <div className="overlay">
                <h1>Travel Explorer</h1>
                <h2>Find your next adventure with this full-stack application built with Python, React, Flask and PostgreSQL </h2>
                <a className="info" href="https://github.com/seanfenelon/Project-4">GitHub</a>
                <a className="info" href="https://project-4-sean.herokuapp.com/">Live</a>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>

    <section className="footer" id="contact">
      
      <div className="contact-links">
        <div className="container">
          <h1 className="title has-text-centered">Get in touch..</h1>
        </div>
        <div className="columns is-multiline">
          <div className="column is-one-third-desktop is-one-mobile icon-project has-text-centered">
            <a href="https://www.linkedin.com/in/seanfenelon/"><i className="devicon-linkedin-plain icon" /></a>
          </div>
          <div className="column is-one-third-desktop is-one-mobile icon-project has-text-centered">
            <a href="https://github.com/seanfenelon"><i className="devicon-github-plain icon" /></a>
          </div>
          <div className="column is-one-third-desktop is-one-mobile icon-project has-text-centered">
            <span className="icon">
              <a href="mailto:sean.fenelon93@gmail.com"><i className="fa fa-envelope"></i></a>
            </span>
            
          </div>
        </div>
      </div>
    </section>
  </body>
}
export default Home