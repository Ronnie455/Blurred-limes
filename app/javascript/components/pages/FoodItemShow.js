import React from "react"
import {Card, CardBody, CardText, CardTitle, Button} from "reactstrap"
import {NavLink, useParams, useNavigate} from "react-router-dom"

const FoodItemShow = ({foodItems, logged_in, deleteFoodItem}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  let selectedFoodItem = foodItems?.find(foodItem => foodItem.id === +id)
  const handlesubmit = () => {
    deleteFoodItem (selectedFoodItem.id)
    navigate("/protectedindex")
  }
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
            {selectedFoodItem.name}
            </CardTitle>
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
          <Button>
            <NavLink to={`/fooditemedit/${selectedFoodItem?.id}`}>Edit Food Item</NavLink>
          </Button>
          <Button onClick={handlesubmit}>
            <NavLink to={"/protectedindex"}>Remove from Inventory</NavLink>
          </Button>
        </>
      )}
          <Button>
            <NavLink to={"/protectedindex"}>
              Back to Inventory
            </NavLink>
          </Button>
    </>
  )
}
export default FoodItemShow