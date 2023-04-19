import React from "react"
import {Card, CardBody, CardText, CardTitle, Button} from "reactstrap"
import {NavLink, useParams} from "react-router-dom"


const FoodItemShow = ({foodItems, logged_in}) => {
  let {id} = useParams()
  let selectedFoodItem = foodItems?.find(foodItem => foodItem.id === +id)
    

    return (
    <>
      {selectedFoodItem && (
        <Card
        style={{
          width: "45%"
        }}
        >
        <img
          alt={selectedFoodItem.name}
          src={selectedFoodItem.image}
        />
          <CardBody>
            <CardTitle>
              Food Information
            </CardTitle>
            <CardText>
              {selectedFoodItem.name}
            </CardText>
            <CardText>
              Quantity: {selectedFoodItem.quantity}
            </CardText>
            <CardText>
              Expiration Date: {selectedFoodItem.expiration_date}
            </CardText>
            <CardText>
              Location: {selectedFoodItem.location}
            </CardText>
          </CardBody>
        </Card>
        
        )}
      {logged_in && (
        <>
      </>
    )}
      <Button>
        <NavLink to={"/fooditemindex"}>
          Back to Index
        </NavLink>
      </Button>
    </>
  )
}
export default FoodItemShow