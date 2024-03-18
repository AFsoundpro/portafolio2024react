import React, { useState, useEffect } from 'react';
import './portafolio.css';

function Portafolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('hsl(214, 84%, 56%)');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleColor = (color) => {
    setPrimaryColor(color);
  };

  useEffect(() => {
    const toggleTheme = document.getElementById('toggle-theme');
    const toggleIcon = document.getElementById('toggle-icon');
    const toggleText = document.getElementById('toggle-text');
    const toggleColors = document.getElementById('toggle-colors');
    const rootStyles = document.documentElement.style;

    const handleToggleTheme = () => {
      document.body.classList.toggle('dark');
      if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'public/icons/sun.svg';
        toggleText.textContent = 'Light Mode';
      } else {
        toggleIcon.src = 'public/icons/moon.svg';
        toggleText.textContent = 'Dark Mode';
      }
    };

    const handleToggleColors = (e) => {
      rootStyles.setProperty('--primary-color', e.target.dataset.color);
    };

    toggleTheme.addEventListener('click', handleToggleTheme);
    toggleColors.addEventListener('click', handleToggleColors);

    return () => {
      toggleTheme.removeEventListener('click', handleToggleTheme);
      toggleColors.removeEventListener('click', handleToggleColors);
    };
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <header className="header">
        <div className="switches">
          <div onClick={toggleDarkMode} id="toggle-theme" className="toggle-theme">
            <img id="toggle-icon" src="/icons/moon.svg" alt="icon theme" className="toggle-theme__icon" />
            <p id="toggle-text" className="toggle-theme__text">{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
          </div>                             
       
        </div>          
        <div id="toggle-colors" className="colors">
          <div data-color="hsl(46, 84%, 56%)" className="colors__item colors__item--orange" onClick={(e) => toggleColor(e.target.dataset.color)}></div>
          <div data-color="hsl(150, 84%, 56%)" className="colors__item colors__item--green" onClick={(e) => toggleColor(e.target.dataset.color)}></div>
          <div data-color="hsl(276, 84%, 56%)" className="colors__item colors__item--purple" onClick={(e) => toggleColor(e.target.dataset.color)}></div>
          <div data-color="hsl(214, 84%, 56%)" className="colors__item colors__item--blue" onClick={(e) => toggleColor(e.target.dataset.color)}></div>
        </div>
      </header>
            <main className="main">
                <section className="column column--left">
                    {/* PROFILE CARD */}
                    <article className="card card--profile">
                        <div className="card__image-container">
                            <img src="/images/afsprofile.jpeg" alt="" />
                            <div className="card__header">
                                <h2 className="card__title">ANDRES FELIPE SANCHEZ PINILLA</h2>
                                <p className="card__subtitle no-margin">Full Stack Web Developer</p>
                            </div>
                            <div className="card__body">
                                <div className="card__link">
                                    <i className="fas fa-envelope icon"></i>
                                    <a href="mailto:pikison0492@gmail.com">
                                        <b>pikison0492@gmail.com</b>
                                    </a>
                                </div>
                                <div className="card__link">
                                    <i className="fas fa-phone-alt icon"></i>
                                    <a href="tel: +57 (301) 397-35-92">
                                        <b>+57 (301) 397-35-92</b>
                                    </a>
                                </div>
                                <p className="card__text">
                                Como Full Stack Developer con más de 3 años de experiencia, me especializo en el desarrollo web, centrándome en el front-end con tecnologías como HTML5, CSS, Bootstrap, y Tailwind, además de Redux, React y React-Native. En el back-end, domino Node.js, Express y Sequelize, junto con bases de datos NoSQL y SQL. Mis habilidades incluyen el diseño de soluciones, aplicando metodologías SCRUM para fomentar el trabajo en equipo, la comunicación efectiva y el pensamiento crítico. Estoy comprometido con la excelencia en el desarrollo de aplicaciones web y móviles, buscando siempre soluciones innovadoras y eficientes.
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className="card card--experience">
                        <h2 className="card__title">Experiences</h2>
                        <div className="experience">
                            <img src="/images/logo.png" alt="logo" className="experience__image" />
                            <div className="experience__info">
                                <p className="experience__time">Feb 2017 - Current</p>
                                <h3 className="experience__job">Fullstack web Developer </h3>
                                <h4>Red Package S.A.S</h4>
                                <p className="experience__description">Desde agosto de 2021 hasta la actualidad, he estado involucrado en el desarrollo y la gestión de Red Package, una plataforma web revolucionaria que simplifica la importación de mercancías desde Estados Unidos a Colombia. Como parte del equipo, he contribuido al diseño y la implementación de la herramienta, que permite a los usuarios crear casilleros virtuales personalizados, gestionar y consolidar sus compras en línea de manera eficiente. Nuestra misión es optimizar el proceso de envío y brindar una experiencia de importación sin complicaciones. Invito a todos a descubrir cómo simplificar sus compras internacionales en www.redpackage.app.</p>
                            </div>
                        </div>
                        <div className="experience">
                            <img src="/images/logo.png" alt="logo" className="experience__image" />
                            <div className="experience__info">
                                <p className="experience__time">Feb 2017 - Current</p>
                                <h3 className="experience__job">Fullstack web Developer</h3>
                                <p className="experience__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis quis illo, ips!</p>
                            </div>
                        </div>
                        <div className="experience">
                            <img src="/images/logo.png" alt="logo" className="experience__image" />
                            <div className="experience__info">
                                <p className="experience__time">Feb 2017 - Current</p>
                                <h3 className="experience__job">Fullstack web Developer</h3>
                                <p className="experience__description">Lorem ipsum dolor sit, amet consectetur.</p>
                            </div>
                        </div>
                        <article className="card card--hobbies">
                            <h2 className="card__title">Hobbies</h2>
                            <div className="card__image-container">
                                <img src="public/images/hobbie.jpg" alt="bike" />
                            </div>
                            <h3 className="hobbie__title">Biking</h3>
                            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vero.</p>
                        </article>
                    </article>
                </section>
                <section className="column column--right">
                    <article className="card">
                        <div className="skills">
                            <h2 className="card__title">Front end</h2>
                            <small>Years of experience</small>
                            <div className="skills__header">
                                <span className="skills__start-level">0</span>
                                <span className="skills__start-level">5</span>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">HTML</p>
                                <div className="skills__bar skills__bar--70"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">CSS</p>
                                <div className="skills__bar skills__bar--80"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">REACT</p>
                                <div className="skills__bar skills__bar--60"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">Bootstrap</p>
                                <div className="skills__bar skills__bar--80"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">Redux</p>
                                <div className="skills__bar skills__bar--60"></div>
                            </div>
                        </div>
                    </article>

                    <article className="card">
                        <div className="skills">
                            <h2 className="card__title">Backend</h2>
                            <small>Years of experience</small>
                            <div className="skills__header">
                                <span className="skills__start-level">0</span>
                                <span className="skills__start-level">5</span>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">NodeJS</p>
                                <div className="skills__bar skills__bar--70"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">Express</p>
                                <div className="skills__bar skills__bar--90"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">Javascript</p>
                                <div className="skills__bar skills__bar--60"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">Python</p>
                                <div className="skills__bar skills__bar--60"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">Javascript</p>
                                <div className="skills__bar skills__bar--60"></div>
                            </div>
                        </div>
                    </article>
                    <article className="card">
                        <div className="skills">
                            <h2 className="card__title">Databases</h2>
                            <small>Years of experience</small>
                            <div className="skills__header">
                                <span className="skills__start-level">0</span>
                                <span className="skills__start-level">5</span>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">mySQL</p>
                                <div className="skills__bar skills__bar--70"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">PostgreSQL</p>
                                <div className="skills__bar skills__bar--80"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">MongoDB</p>
                                <div className="skills__bar skills__bar--60"></div>
                            </div>
                            <div className="skills__item">
                                <p className="skills__tech">Sequelize</p>
                                <div className="skills__bar skills__bar--60"></div>
                            </div>
                        </div>
                    </article>

                  {/* PROYECTOS DEL PORTAFOLIO */}

                    <article className="card card--project">
                        <div className="card__image-container">
                            <img src="/images/rpss.png" alt="landingpage" className="card__image" />
                        </div>
                        <div className="project">
                            <div className="project__tags">
                                <span className="project__tag">#HTML</span>
                                <span className="project__tag">#CSS</span>
                                <span className="project__tag">#JS</span>
                                <span className="project__tag">#JS</span>
                            </div>
                            <h2 className="card__title">Red Package WebAPP</h2>
                            <p className="card__text">Desde 2021, lideré el desarrollo y despliegue de Red Package, plataforma que simplifica la importación de productos desde EE. UU. a Colombia. Visita www.redpackage.app para descubrir más.</p>
                            <div className="buttons">
                                <a href="https://www.redpackage.app" target='_blank' className="button button--primary">Demo</a>
                            </div>
                        </div>
                    </article>

                    <article className="card card--project">
                        <div className="card__image-container">
                            <img src="/images/LOGO-I.P.I..png" alt="landingpage" className="card__image" />
                        </div>
                        <div className="project">
                            <div className="project__tags">
                                <span className="project__tag">#HTML</span>
                                <span className="project__tag">#CSS</span>
                                <span className="project__tag">#JS</span>
                                <span className="project__tag">#JS</span>
                            </div>
                            <h2 className="card__title">Frontend Web Developer - I.P.I Serviprecorte LTDA.</h2>
                            <p className="card__text">Desarrollo del website empresarial y de contacto de la empresa con su posterior despliegue.</p>
                            <div className="buttons">
                                <a href="https://ipiproject.onrender.com/" target='_blank' className="button button--primary">Demo</a>
                                <a href="https://github.com/AFsoundpro/ipiproject" target='_blank' className="button button--ghost">Code</a>
                            </div>
                        </div>
                    </article>

                    <article className="card card--project">
                        <div className="card__image-container">
                            <img src="/images/vpass.png" alt="landingpage" className="card__image" />
                        </div>
                        <div className="project">
                            <div className="project__tags">
                                <span className="project__tag">#HTML</span>
                                <span className="project__tag">#CSS</span>
                                <span className="project__tag">#JS</span>
                                <span className="project__tag">#JS</span>
                            </div>
                            <h2 className="card__title">Frontend Vintage Pro Audio - Vintage Pro Audio</h2>
                            <p className="card__text">Desarrollo del website empresarial y de contacto de la empresa con su posterior despliegue.</p>
                            <div className="buttons">
                                <a href="#" className="button button--primary">Demo</a>
                                <a href="#" className="button button--ghost">Code</a>
                            </div>
                        </div>
                    </article>
                    <article className="card card--project">
                        <div className="card__image-container">
                            <img src="/images/lprpss.png" alt="landingpage" className="card__image" />
                        </div>
                        <div className="project">
                            <div className="project__tags">
                                <span className="project__tag">#HTML</span>
                                <span className="project__tag">#CSS</span>
                                <span className="project__tag">#JS</span>
                                <span className="project__tag">#JS</span>
                            </div>
                            <h2 className="card__title">Frontend Vintage Pro Audio - Vintage Pro Audio</h2>
                            <p className="card__text">Desarrollo del website empresarial y de contacto de la empresa con su posterior despliegue.</p>
                            <div className="buttons">
                                <a href="https://landingrp.onrender.com/" target='_blank' className="button button--primary">Demo</a>
                                <a href="https://github.com/AFsoundpro/landingrp" target='_blank' className="button button--ghost">Code</a>
                            </div>
                        </div>
                    </article>
                    <article className="card card--project">
                        <div className="card__image-container">
                            <img src="/images/vpass.png" alt="landingpage" className="card__image" />
                        </div>
                        <div className="project">
                            <div className="project__tags">
                                <span className="project__tag">#HTML</span>
                                <span className="project__tag">#CSS</span>
                                <span className="project__tag">#JS</span>
                                <span className="project__tag">#JS</span>
                            </div>
                            <h2 className="card__title">Frontend Vintage Pro Audio - Vintage Pro Audio</h2>
                            <p className="card__text">Desarrollo del website empresarial y de contacto de la empresa con su posterior despliegue.</p>
                            <div className="buttons">
                                <a href="#" className="button button--primary">Demo</a>
                                <a href="#" className="button button--ghost">Code</a>
                            </div>
                        </div>
                    </article>
                    <article className="card card--project">
                        <div className="card__image-container">
                            <img src="/images/vpass.png" alt="landingpage" className="card__image" />
                        </div>
                        <div className="project">
                            <div className="project__tags">
                                <span className="project__tag">#HTML</span>
                                <span className="project__tag">#CSS</span>
                                <span className="project__tag">#JS</span>
                                <span className="project__tag">#JS</span>
                            </div>
                            <h2 className="card__title">Frontend Vintage Pro Audio - Vintage Pro Audio</h2>
                            <p className="card__text">Desarrollo del website empresarial y de contacto de la empresa con su posterior despliegue.</p>
                            <div className="buttons">
                                <a href="#" className="button button--primary">Demo</a>
                                <a href="#" className="button button--ghost">Code</a>
                            </div>
                        </div>
                    </article>
                    <article className="card card--project">
                        <div className="card__image-container">
                            <img src="/images/vpass.png" alt="landingpage" className="card__image" />
                        </div>
                        <div className="project">
                            <div className="project__tags">
                                <span className="project__tag">#HTML</span>
                                <span className="project__tag">#CSS</span>
                                <span className="project__tag">#JS</span>
                                <span className="project__tag">#JS</span>
                            </div>
                            <h2 className="card__title">Frontend Vintage Pro Audio - Vintage Pro Audio</h2>
                            <p className="card__text">Desarrollo del website empresarial y de contacto de la empresa con su posterior despliegue.</p>
                            <div className="buttons">
                                <a href="#" className="button button--primary">Demo</a>
                                <a href="#" className="button button--ghost">Code</a>
                            </div>
                        </div>
                    </article>
                    <article className="card card--project">
                        <div className="card__image-container">
                            <img src="/images/vpass.png" alt="landingpage" className="card__image" />
                        </div>
                        <div className="project">
                            <div className="project__tags">
                                <span className="project__tag">#HTML</span>
                                <span className="project__tag">#CSS</span>
                                <span className="project__tag">#JS</span>
                                <span className="project__tag">#JS</span>
                            </div>
                            <h2 className="card__title">Frontend Vintage Pro Audio - Vintage Pro Audio</h2>
                            <p className="card__text">Desarrollo del website empresarial y de contacto de la empresa con su posterior despliegue.</p>
                            <div className="buttons">
                                <a href="#" className="button button--primary">Demo</a>
                                <a href="#" className="button button--ghost">Code</a>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>

    );
}

export default Portafolio;
    

