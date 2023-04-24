import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Fridge1 from '../assets/Fridge1.png'
import Veggies from '../assets/Veggies.png'
import Shopping1 from '../assets/Shopping1.png'
import Cooking4 from '../assets/Cooking4.png'

const Home = ( {logged_in, current_user} ) => {
  return (
    <>

<Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="carousel-img"
          src={Fridge1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="carousel-img"
          src={Veggies}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src={Shopping1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src={Cooking4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/* 
      {logged_in ?  
        <>
           <h1>Welcome {current_user.email}!</h1>
           <p> Keep track of your personal food inventory in your refigerator or pantry. As a user, you can view your food inventory, add new food items, and update your inventory. Get started now!</p>
        </> 
        : <>
            <h1>Welcome!</h1>
            <p>Tired of buying items you already have at home?  Have you ever had a roommate eat your food?
            Do ya'll wish you could keep your groceries more organized?
            Well....We are here to clear up the blurred limes!!
            With our new and innovative application  Blurred limes you can reduce waste and save money by keeping a log of personal inventory which will save you time and keep your kitchen organized.
            So sign up today because no one wants an angry kitchen. 
            </p>
          </>
      } */}

        
    </>
  )
}
export default Home





