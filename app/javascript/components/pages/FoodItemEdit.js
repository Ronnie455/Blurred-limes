import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, NavLink } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const FoodItemEdit = ({ foodItems, current_user, updateFoodItem }) => {
  const [editFoodItem, setEditFoodItem] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (foodItems?.length > 0) {
      let currentFoodItem = foodItems.find(
        (foodItem) => foodItem.id === +id
      );
      setEditFoodItem({
        name: currentFoodItem.name,
        quantity: currentFoodItem.quantity,
        expiration_date: currentFoodItem.expiration_date,
        location: currentFoodItem.location,
        image: currentFoodItem.image,
        user_id: current_user?.id,
      });
    }
  }, [foodItems]);

  const handleChange = (e) => {
    setEditFoodItem({ ...editFoodItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateFoodItem(editFoodItem, id);
    navigate(`/fooditemshow/${id}`);
  };
  if (editFoodItem) {
    return (
      <>
      <h1>Edit Food Item</h1>
      <div className="create-form">
      <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              value={editFoodItem.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="quanity">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="text"
              onChange={handleChange}
              value={editFoodItem.quantity}
            />
          </FormGroup>
          <FormGroup>
          <Label for="expiration_date">Expiration date</Label>
            <Input
              id="expiration_date"
              name="expiration_date"
              type="text"
              onChange={handleChange}
              value={editFoodItem.expiration_date}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input
              name="location"
              type="text"
              onChange={handleChange}
              value={editFoodItem.location}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              name="image"
              type="text"
              onChange={handleChange}
              value={editFoodItem.image}
            />
          </FormGroup>
          <Button onClick={handleSubmit}> 
          Update Food Item
         </Button>
        </Form>
      </div>
      </>
    );
  } 
};
export default FoodItemEdit;