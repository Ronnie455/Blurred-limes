import React from "react";
import { Button, UncontrolledCarousel, NavLink, NavItem } from "reactstrap";

const Home = ( {logged_in, current_user} ) => {
  return (
    <>
        {logged_in ?  
        <>
          <div className="home-message">
            <br /><h2>WELCOME {current_user.email}!</h2><br />
            <p><a style={{color:"#203611"}} href='/protectedindex'>View, edit, or add to your inventory!</a></p>
          </div> 
        </>
          : <div className="home-message">
              <br /><h2>WELCOME!</h2><br />
              <p>Reduce waste, save money, <br />and keep your kitchen organized. <br />Sign up today to start tracking your<br/> personal inventory with Blurred Limes.<br /></p>
            </div>
        }
      <UncontrolledCarousel
        items={[
        {
          altText: 'Slide 1',
          captionText: '',
          key: 1,
          src: 'https://images.unsplash.com/photo-1606859191214-25806e8e2423?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ello-AEU9UZstCfs-unsplash.jpg'
        },
        {
          altText: 'Slide 2',
          captionText: '',
          key: 2,
          src: 'https://images.unsplash.com/photo-1574722772633-e401c33eb317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2446&q=80',
        },
        {
          altText: 'Slide 3',
          captionText: '',
          key: 3,
          src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nrd-D6Tu_L3chLE-unsplash.jpg',
        },
        {
          altText: 'Slide 4',
          captionText: '',
          key: 4,
          src: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jason-briscoe-n4ymhyyFY7A-unsplash.jpg',
        },
        {
          altText: 'Slide 5',
          captionText: '',
          key: 5,
          src: 'https://images.unsplash.com/photo-1590311825124-73ec5233cb0a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=annie-spratt-WxiblgUeQpM-unsplash.jpg',
        }
      ]}
      />
    </>
  )
}
export default Home