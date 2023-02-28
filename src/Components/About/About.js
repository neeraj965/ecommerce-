import './About.css'
import React from 'react';

const About = () => {
    return (
        <div className='color'>
        <div className='aboutme'>
           <h1 className='about'>About Me</h1>
           <h5 id='frontend'>Frontend Developer</h5>

           <span className='about-section'>I'm a front-end developer located in India. I love to create simple yet beautiful<br/> websites with great user experience.

           I'm interested in the whole frontend<br/> stack Like trying new things and building great projects. I'm an independent <br/>freelancer and blogger. I love to write blogs and read books.
           
           I believe everything is an Art <br/>when you put your consciousness in it. You can connect with me via social links.</span>
       
           </div>
           <img src="https://pbs.twimg.com/profile_images/1599659589787873280/P3pdtjF6_400x400.jpg" alt="" className='image' />


           <div className='about-down'>I’m highly motivated react developer, Currently pursuing my bacheler's degree and lives in Uttar-Pradesh, India
           I am much more capable in giving significant contribution that will be surely beneficial for the company's growth point of view. My contribution will surely place the company at the top. Lastly I am quick learner and I never give up until I do my work as good.</div>
           </div>
    );
};

export default About;