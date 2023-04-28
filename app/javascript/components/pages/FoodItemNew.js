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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setMyFoodItem({ ...myFoodItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!myFoodItem.name) {
      formErrors.name = "Name is required";
    }

    if (!myFoodItem.quantity) {
      formErrors.quantity = "Quantity is required";
    }

    if (!myFoodItem.expiration_date) {
      formErrors.expiration_date = "Expiration date is required";
    }

    if (!myFoodItem.location) {
      formErrors.location = "Location is required";
    }

    if (!myFoodItem.image) {
      formErrors.image = "Image is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      createFoodItem(myFoodItem);
      navigate("/protectedindex");
    }
  };

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
            {errors.name && <div className="text-danger">{errors.name}</div>}
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
            {errors.quantity && <div className="text-danger">{errors.quantity}</div>}
          </FormGroup>
          <FormGroup>
            <Label style={{width: '150px'}} for="expiration_date">Expiration Date</Label>
            <Input
              name="expiration_date"
              placeholder="MM/DD/YYYY"
              type="text"
              onChange={handleChange}
            />
            {errors.expiration_date && <div className="text-danger">{errors.expiration_date}</div>}
          </FormGroup>
          <FormGroup>
            <Label style={{width: '150px'}} for="location">Location</Label>
            <Input
              name="location"
              placeholder="ex. refrigerator, pantry, etc"
              type="text"
              onChange={handleChange}
            />
            {errors.location && <div className="text-danger">{errors.location}</div>}
          </FormGroup>
          <FormGroup>
            <Label style={{width: '150px'}} for="image">Image</Label>
            <Input
              name="image"
              placeholder="an image url"
              type="text"
              onChange={handleChange}
            />
            {errors.image && <div className="text-danger">{errors.image}</div>}
          </FormGroup>
          <div className="mb-3">
            <Button onClick={handleSubmit}> 
              Add To Inventory
            </Button>
          </div>
        </Form>
        <br/><br/>
      </div>
    </>
  );
};

export default FoodItemNew;
