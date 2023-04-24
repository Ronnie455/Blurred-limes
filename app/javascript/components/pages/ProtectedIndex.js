import React from 'react'
import { Card, CardBody, CardTitle, Button, CardSubtitle, CardText } from 'reactstrap'
import { NavLink } from "react-router-dom";

const Protectedindex = ({foodItems, current_user}) => {
  const myFoodItems = foodItems?.filter(foodItem => current_user.id === foodItem.user_id)

  return (
    <>
    <h1>My Inventory</h1>
    <div className='inventory'>
      {myFoodItems?.map((foodItem, index) => {
        return (
          <Card
          key={index}
          style={{
            width: '18rem'
          }}
          >
            <CardBody>
            <CardTitle tag="h5">
              {foodItem.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {foodItem.location}
            </CardSubtitle>
          </CardBody>
          <img
            alt={foodItem.name}
            src={foodItem.image}
            width="80%"
            height="300px"
            object-fit="contain"
          />
          <CardBody>
            <CardText>
            Current Stock: {foodItem.quantity}
            <br/> Expires: {foodItem.expiration_date}
            </CardText>
            <Button>
              <NavLink style={{color:"white"}} to={`/fooditemshow/${foodItem.id}`}>
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