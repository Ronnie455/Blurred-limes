import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'
import Fridge1 from '../assets/Fridge1.png'


const Home = ( {logged_in, current_user} ) => {
  
  
  

const items = [
  {
    src: {Fridge1},
    altText: 'Photo of Fridge',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  
  
  return (
    <>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
          {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

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
      }

        
    </>
  )
}
}
export default Home