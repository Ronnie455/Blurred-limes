import React from 'react';
import Tammy from '../assets/Tammy.png';
import Manny from '../assets/Manny.png';
import Marilyn from '../assets/Marilyn.png';
import Ronnie from '../assets/Ronnie.png';

const AboutUs = () => {
  return (
    <>
    <h1>Meet The Developers</h1>
    <div className='developers-container'>
      <div className='bio'>
        <img src={Tammy} alt='photo of Tammy' className='dev-image'/>
        <p>I'm currently attending LEARN Academy as a full-time software development student looking to pivot into a new career. Before making the decision to attend LEARN Academy, I have been getting my feet wet in the corporate world for the past few years - I took on various different roles such as being a receptionist, office manager, and an assistant program manager. During this time, I developed an interest in graphic design to explore my creative side and completed a graphic design program at UC Berkeley Extension while working at my full-time job. I quickly realized that I can do more with graphic design if I knew how to code, so naturally, coding started to pique my interest. Now I'm exposed to so many different paths for software development and am excited to start a new career! In my spare time, I like to watch sports and plan my next travel destination!
        </p>
      </div> 
      <div className='bio'>
        <img src={Manny} alt='photo of Manny' className='dev-image'/>
        <p>Hi my name is Manny Flores Im a veteran and currently a full stack web developer student at Learn Academy. Being a full stack developer requires a lot of time, dedication and willingness to specialize in both ends of the framework, so the process can be tedious - however my military background and life experiences has assisted me with the transition.
        </p>
      </div>
      <div className='bio'>
        <img src={Marilyn} alt='photo of Marilyn' className='dev-image'/>
        <p>Hello! I was born and raised in San Diego, CA. I'm a professional dancer turned software developer at LEARN Academy and I'm most eager to connect my artistic creativity to the technology field. I have a passion for teaching and connecting with people. When I'm not coding, I love experiencing new places and being outside!  
        </p>
      </div>
      <div className='bio'>
        <img src={Ronnie} alt='photo of Ronnie' className='dev-image'/>
        <p>Currently attending LEARN academy as a full stack developer | I love riding dirt-bikes, snowboarding and Traveling! | Passionate about cultivating my craft and sharing knowledge with people I'm around.
        </p>
      </div>
    </div>
    
    </>
  )
}

export default AboutUs