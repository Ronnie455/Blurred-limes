import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const FoodItemNew = ({createFoodItem, current_user}) => {
  const navigate = useNavigate();
  const [myFoodItem, setMyFoodItem] = useState({
    name: "",
    quantity: "",
    expiration_date: "",
    location: "",
    image: "",
    user_id: current_user?.id,
  });
  const handleChange = (e) => {
    setMyFoodItem({ ...myFoodItem, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    createFoodItem(myFoodItem);
    navigate("/protectedindex");
  }
  return (
    <>
    <h1>Add a New Food Item to Your Inventory</h1>
    <div className="create-form">
      <Form>
        <FormGroup>
          <Label style={{width: '150px'}} for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="name of the food item"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label style={{width: '150px'}} for="quantity">Quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            placeholder="quantity of the food item"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label style={{width: '150px'}} for="expiration_date">Expiration Date</Label>
          <Input
            name="expiration_date"
            placeholder="MM/DD/YYYY"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label style={{width: '150px'}} for="location">Location</Label>
          <Input
            name="location"
            placeholder="ex. refrigerator, pantry, etc"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label style={{width: '150px'}} for="image">Image</Label>
          <Input
            name="image"
            placeholder="add an image URL"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <div className="invetory-button text-center">
        <Button onClick={handleSubmit}>Add to Inventory</Button>
        </div>
      </Form><br/><br/>
    </div>
    </>
  )
}
export default FoodItemNew