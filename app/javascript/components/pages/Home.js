import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const Home = ( {logged_in, current_user} ) => {
  return (
    <>
        {logged_in ?  
        <>
          <div className="home-message">
            <br /><h2>WELCOME {current_user.username}!</h2><br />
            <a style={{color:"#203611"}} href='/protectedindex'>View, edit, or add to your inventory!</a>
          </div> 
        </>
          : <div className="home-message">
              <h2>WELCOME!</h2><br />
              <p>Reduce waste, save money, <br />and keep your kitchen organized. <br />Sign up today to start tracking your<br/> personal inventory with Blurred Limes.<br /></p>
            </div>
        }
      <UncontrolledCarousel
        items={[
        {
          altText: 'fruits and vegetables in a refrigerator',
          header: 'Tracking what I eat has been a powerful tool in becoming more aware of my dietary habits. With Blurred Limes, I can easily see what ingredients I have or need more of, so when planning my meals, I can make healthier choices.',
          caption: '-Manny Flores',
          key: 1,
          src: 'https://images.unsplash.com/photo-1606859191214-25806e8e2423?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ello-AEU9UZstCfs-unsplash.jpg'
        },
        {
          altText: '3 roommates grocery shopping',
          header: 'Blurred Limes has made life with roommates so much easier. We have a system with our grocery shopping and keep our personal items organized. 10/10 recommend!',
          caption: '-Jake Palmer',
          key: 2,
          src: 'https://images.unsplash.com/photo-1574722772633-e401c33eb317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2446&q=80',
        },
        {
          altText: 'vegetables in a grocery store',
          header: 'Since using Blurred Limes, I hardly ever waste my groceries. My inventory log has helped me to stop over buying food and know exactly how much I need to buy. I am definitely saving money now too!',
          caption: '-Charles Smith',
          key: 3,
          src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nrd-D6Tu_L3chLE-unsplash.jpg',
        },
        {
          altText: 'a couple cooking in their kitchen',
          header: 'My boyfriend and I love this app so much! If either one of us goes to buy groceries, we no longer need to ask the other person what we need and can just check Blurred Limes. We even spend more quality time cooking together since we use the app to plan dinners.',
          caption: '-Amara Loraine',
          key: 4,
          src: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jason-briscoe-n4ymhyyFY7A-unsplash.jpg',
        },
        {
          altText: 'kitchen pantry with an open door',
          header: 'Blurred Limes is a time saver and a life saver! As a busy mother, I often order my groceries online. With this app, I am able to see what food items I have in my pantry, refrigerator, or freezer. It is amazing!',
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