import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return <body>

    <div className="header-wrapper" id="home">

      <section className="hero is-full-height">
        {/* <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <div className="navbar-burger burger" data-target="mobile-nav">
              <span>About</span>
              <span>Skills</span>
              <span>Projects</span>
            </div>
          </div>

          <div id="mobile-nav" className="navbar-menu">
            <div className="navbar-end">
              <div className="buttons is-primary">
                <div className="navbar-item">
               
                  <a className="navbar-item" href="#home">
                    Home
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#about-me">
                    About Me
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#skills">
                    Skills
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#my-work">
                    Projects
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#contact">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
 */}

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
            className="column is-6 has-vertically-aligned-content about-me-content"
            data-aos="fade-right"
          >
            <p className="about-me-text">My name is Sean.</p>
            <br />
            <p className="about-me-text">I am a highly energetic software developer. Personally and professionally, I am driven by a sense of freedom and have a passion for adventure. This led me to leave behind the world of in vitro-diagnostics in pursuit of a career epitomised by innovation, creativity and a desire to push boundaries. I’m looking to start my career as a full-stack developer in a creative and bold organisation bringing my optimistic and unflappable attitude.</p>
            <br />
            <div className="is-divider"></div>
            
          </div>
          <div className="column is-6 right-image" data-aos="fade-left">
            <img
              className="is-rounded"
              src="/src/images/headshot.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section skills">
      <h1 className="title is-large has-text-centered">SKILLS</h1>
      <div className="container icons">
        <div className="columns is-multiline is-mobile is-centered">
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-babel-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-css3-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-git-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-github-original icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-heroku-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-html5-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-javascript-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-mongodb-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-mysql-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-nodejs-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-npm-original-wordmark icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-postgresql-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-python-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-react-original icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-sass-original icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-visualstudio-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>
          <div className="column is-one-fifth-desktop is-3-mobile icon-column">
            <i className="devicon-webpack-plain icon" />
            {/* <div className="icon-name">Babel</div> */}
          </div>


        </div>
      </div>
    </section>
    

    <section className="section project" id="projects">
      <div className="container container-project project-space-invaders">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/space-invaders/start_screen.png" />
                  </figure>
                </article>
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/space-invaders/space-invaders-game.png" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title">SPACE INVADERS</p>
                  <p className="subtitle is-5">Space Invaders was the first project of the GA Software Engineering Immersive. The goal of this one-week solo project create a single page game and deploy it online!</p>
                </article>
                <article className="tile is-child notification">
                  <p className="title is-3">Technologies</p>
                  <div className="columns is-multiline">
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-javascript-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-html5-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-css3-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-git-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-github-plain icon" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/space-invaders/next_wave.png" />
                  </figure>
                </article>
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/space-invaders/game_over.png" />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-project project-the-movie-guru">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/the-movie-guru/home.png" />
                  </figure>
                </article>
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/the-movie-guru/top-grossing.png" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title is-1">The Movie Guru</p>
                  <p className="subtitle is-4">The Movie Guru is a global index for both big budget and small indie films. Created over a week and a half with a single partner for and during the General Assembly Immersive Software Engineering Course.</p>                </article>
                <article className="tile is-child notification">
                  <p className="title is-3">Technologies</p>
                  <div className="columns is-multiline">
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-javascript-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-react-original icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-html5-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-css3-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-git-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-github-plain icon" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/the-movie-guru/search.png" />
                  </figure>
                </article>
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/the-movie-guru/movie.png" />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-project project-ski-resorts-db">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/ski-resorts/home.png" />
                  </figure>
                </article>
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/ski-resorts/resorts.png" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title is-2">SkiResortsDB</p>
                  <p className="subtitle is-5">My third project of the Software Engeneering Immersive bootcamp at General Assembly. Within a group of four we built a full stack website, using React, Express, MongoDB and Node. Using GitHub and Git to collaborate, we were learning the process of deploying a full stack website.</p>
                </article>
                <article className="tile is-child notification">
                  <p className="title is-4">Technologies</p>
                  <div className="columns is-multiline">
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-react-original icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-mongodb-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-javascript-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-express-original icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-html5-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-css3-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-git-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-github-plain icon" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/ski-resorts/single-resort.png" />
                  </figure>
                </article>
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/ski-resorts/account.png" />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-project project-travel-db">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/travel-db/home.png" />
                  </figure>
                </article>
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/travel-db/explore.png" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <p className="title is-2">TravelExplorer</p>
                  <p className="subtitle is-5"> The final project at GA was to create a full-stack web application. This two-person, week-long project utilised a Python Flask RESTful API. TravelExplorer allows users to navigate the world, exploring new cities and find some new places and even suggest an itinerary for specified dates. User functionality allows the creation of travel wish-lists, and comments and reviews. </p>
                </article>
                <article className="tile is-child notification">
                  <p className="title is-4">Technologies</p>
                  <div className="columns is-multiline">
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-python-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-mongodb-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-javascript-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-express-original icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-react-original icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-html5-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-css3-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-git-plain icon" />
                    </div>
                    <div className="column is-one-third-desktop is-one-mobile icon-project">
                      <i className="devicon-github-plain icon" />
                    </div>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/travel-db/country.png" />
                  </figure>
                </article>
                <article className="tile is-child notification">
                  <figure className="image is-4by3">
                    <img src="images/travel-db/account.png" />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    



    <footer className="footer">
      <div className="contact-links">
        <div className="columns is-multiline">
          <div className="column is-one-third-desktop is-one-mobile icon-project has-text-centered">
            <i className="devicon-linkedin-plain icon" />
          </div>
          <div className="column is-one-third-desktop is-one-mobile icon-project has-text-centered">
            <i className="devicon-github-plain icon" />
          </div>
          <div className="column is-one-third-desktop is-one-mobile icon-project has-text-centered">
            <span className="icon">
              <i className="fa fa-envelope"></i>
            </span>
            
          </div>
        </div>
      </div>
    </footer>
  </body>
}
export default Home