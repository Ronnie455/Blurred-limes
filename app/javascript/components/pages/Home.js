import React from 'react'

const Home = ( {logged_in, current_user} ) => {
  return (
    <>
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
export default Home