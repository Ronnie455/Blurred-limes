import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const Home = ( {logged_in, current_user} ) => {
  return (
    <>
        {logged_in ?  
        <>
          <div className="home-message">

            <br /><h2>WELCOME {current_user.email}!</h2><br />
            <a style={{color:"#203611"}} href='/protectedindex'>View, edit, or add to your inventory!</a>

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
          header: 'Tracking what I eat can be a powerful tool for becoming more aware of my dietary habits. With Blurred Limes I can easily record what I eat, monitor my calorie intake, and track my nutrient intake, which can help me make more informed decisions about my diet.',
          caption: '-Manny Flores',
          key: 1,
          src: 'https://images.unsplash.com/photo-1606859191214-25806e8e2423?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ello-AEU9UZstCfs-unsplash.jpg'
        },
        {
          altText: 'Slide 2',
          header: 'Blurred Limes helped me achieve my fitness goals by keeping me accountable. Seeing my progress over time, such as reaching daily calorie or nutrient goals, can be incredibly rewarding.',
          caption: '-Jake Palmer',
          key: 2,
          src: 'https://images.unsplash.com/photo-1574722772633-e401c33eb317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2446&q=80',
        },
        {
          altText: 'Slide 3',
          header: 'Blurred Limes has had such a positive impact on my life. By continuing to use this app and make conscious choices about my diet it has really improved my health and wellness.',
          caption: '-Charles Smith',
          key: 3,
          src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nrd-D6Tu_L3chLE-unsplash.jpg',
        },
        {
          altText: 'Slide 4',
          header: 'Living with roommates can be challenging, especially when it comes to sharing food and groceries. Blurred Limes helped me and my roommates keep track of what groceries we each had whichh prevented misunderstandings or disagreements over shared food.',
          caption: '-Eric Allen',
          key: 4,
          src: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jason-briscoe-n4ymhyyFY7A-unsplash.jpg',
        },
        {
          altText: 'Slide 5',
          header: 'By logging your food and grocery purchases, you can ensure that everyone is aware of what is available and who purchased it. This can help prevent situations where one roommate feels like they are constantly buying all the groceries or using up all the shared food. ',
          caption: '-Jane Smith',
          key: 5,
          src: 'https://images.unsplash.com/photo-1590311825124-73ec5233cb0a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=annie-spratt-WxiblgUeQpM-unsplash.jpg',
        }
      ]}
      />
    </>
  )
}
export default Home