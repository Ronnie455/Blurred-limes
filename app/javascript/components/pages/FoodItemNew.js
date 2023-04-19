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
  };

  return (
    <div className="create-form">
      <h1>Add a New Food Item</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="What is the name of the food item?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            placeholder="How many do you have of this food item?"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="expiration_date">Expiration Date</Label>
          <Input
            name="expiration_date"
            placeholder="Good until what date?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            name="location"
            placeholder="Location of the item"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            name="image"
            placeholder="Add an image URL"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Add New Food Item</Button>
      </Form>
    </div>
  )
}

export default FoodItemNew