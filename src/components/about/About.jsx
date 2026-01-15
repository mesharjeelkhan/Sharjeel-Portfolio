import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I’m a Full Stack Developer with 1+ year of hands-on experience building scalable, secure, and production-ready web applications using React, Next.js, Node.js, TypeScript, and the MERN stack. I specialize in transforming complex requirements into clean, intuitive user experiences backed by robust backend architectures.<br/><br/>
                            At Simak IT, I built a company website and portal from scratch, developed credential issuance workflows, and implemented state-heavy modules using Redux. My work focused on performance, scalability, and reliability, including integrating AWS SES for automated communication and designing responsive, mobile-friendly interfaces.<br/><br/>
                            I enjoy working across the full development lifecycle—from UI/UX design and frontend engineering to backend APIs, databases, and deployments. I’m passionate about clean code, modern tooling, and continuous learning, and I thrive in environments where problem-solving and innovation drive impact.
                        </p>
                        <ul className="about__list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Next.js</li>
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>NoSQL</li>
                            <li>SQL</li>
                            <li>NestJS</li>
                            <li>MERN Full Stack</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        {/* <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About