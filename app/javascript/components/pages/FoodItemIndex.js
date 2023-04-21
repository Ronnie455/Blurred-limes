import React from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { NavLink } from "react-router-dom";

const FoodItemIndex = ({foodItems}) => {
  return (
    <>
    <h2>Sign up to keep track of your own food items!</h2>
    <div className='food-items'>
      {foodItems?.map((foodItem, index) => {
        return (
          <Card
          key={index}
          style={{
            width: '18rem',
            height: '500px'
          }}
          >
          <img
            alt={foodItem.name}
            src={foodItem.image}
            width="100%"
            height="300px"
            object-fit="cover"
          />
          <CardBody>
            <CardTitle tag="h5">
            {foodItem.quantity} {foodItem.name}
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

export default FoodItemIndex