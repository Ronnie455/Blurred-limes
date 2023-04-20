import React from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { NavLink } from "react-router-dom";

const Protectedindex = ({foodItems, current_user}) => {
  const myFoodItems = foodItems?.filter(foodItem => current_user.id === foodItem.user_id)

  return (
    <>
    <h1>My Food Items</h1>
    <div className='foodItems'>
      {myFoodItems?.map((foodItem, index) => {
        return (
          <Card
          key={index}
          style={{
            width: '18rem'
          }}
          >
          <img
            alt={foodItem.name}
            src={foodItem.image}
          />
          <CardBody>
            <CardTitle tag="h5">
            {foodItem.quantity} {foodItem.name}
            <br/> Expires: {foodItem.expiration_date}
            </CardTitle>
            <Button>
              <NavLink to={`/fooditemshow/${foodItem.id}`}>
              More Info
              </NavLink>
            </Button>
          </CardBody>
        </Card>
      )
      })}
    </div>
    </>
  )
}

export default Protectedindex