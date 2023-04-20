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
          <h3>Tammy Tran</h3>
          <h4>Tech Lead</h4>
          <img src={Tammy} alt='photo of Tammy' className='dev-image'/>
          <p>Before becoming a software developer, Tammy took on various different roles in the corporate world such as being a receptionist, office manager, and an assistant program manager. During this time, she became interested in software development and decided to take the next step to pivot into a different career path. Her hobbies include traveling around the world and watching sports. One thing you can always find in her pantry is Hot Cheetos chips!
          </p>
        </div> 
        <div className='bio'>
          <h3>Manny Flores</h3>
          <h4>Product Manager</h4>
          <img src={Manny} alt='photo of Manny' className='dev-image'/>
          <p>A veteran and full stack web devleoper. His dedication and willingness to specialize in both ends of the framework can be tedious, however his military background and life experiences have assisted with the transition. Manny's hobbies include watching sports and playing with his son. One thing you can find in his pantry is baking soda!
          </p>
        </div>
        <div className='bio'>
          <h3>Marilyn Remigio</h3>
          <h4>Project Manager</h4>
          <img src={Marilyn} alt='photo of Marilyn' className='dev-image'/>
          <p>A professional hip hop dancer turned software developer who is most eager to connect her artistic creativity to the technology field. She is passionate about teaching dance and connecting with new people. When she's not coding, she loves experiencing new places and being outside! One thing you can find in her pantry is Liquid IV.. gotta stay hydrated!
          </p>
        </div>
        <div className='bio'>
          <h3>Ronnie Maynard</h3>
          <h4>Design Lead</h4>
          <img src={Ronnie} alt='photo of Ronnie' className='dev-image'/>
          <p>A veteran that comes from a blue collar background. Before transitioning into tech, he worked in construction and wildland firefighting. In his spare time you can find him in the woods on his dirt-bike where he drops gears and disappears. One thing you can find in his pantry is white cheddar Cheez-Its!
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs