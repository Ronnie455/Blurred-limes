import React from "react"
import {Card, CardBody, CardText, CardTitle, Button, CardSubtitle} from "reactstrap"
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
        <h1>Food Item</h1>
        <br />
        <div className="show-item">
          {selectedFoodItem && (
            <Card
            style={{
              width: "50%",
              height: "600px"
            }}
            >
              <CardBody>
                <CardTitle tag="h5">
                  {selectedFoodItem.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {selectedFoodItem.location}
                </CardSubtitle>
              </CardBody>
              <img
                alt={selectedFoodItem.name}
                src={selectedFoodItem.image}
                width="60%"
                height="300px"
                object-fit="contain"
                margin="auto"
              />
              <CardBody>
                <CardText>
                  Quantity: {selectedFoodItem.quantity}
                </CardText>
                <CardText>
                  Expiration Date: {selectedFoodItem.expiration_date}
                </CardText>
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
              </CardBody>
            </Card>
          )}
        </div>
      </>
    )
}
export default FoodItemShow