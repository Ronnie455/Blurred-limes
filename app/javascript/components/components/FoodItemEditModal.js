import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const FoodItemEditModal = ({ isOpen, toggleModal, foodItems, current_user, selectedFoodItem, updateFoodItem }) => {
  const [editFoodItem, setEditFoodItem] = useState(selectedFoodItem)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const { id } = useParams()

  const toggleEditModal = () => setEditVisible(!editVisible)
  
  useEffect(() => {
    if (foodItems?.length > 0) {
      let currentFoodItem = foodItems.find((foodItem) => foodItem.id === +id)
      setEditFoodItem({
        name: currentFoodItem.name,
        quantity: currentFoodItem.quantity,
        expiration_date: currentFoodItem.expiration_date,
        location: currentFoodItem.location,
        image: currentFoodItem.image,
        user_id: current_user?.id,
      });
    }
  }, [foodItems, id])


  const handleChange = (e) => {
    setEditFoodItem({ ...editFoodItem, [e.target.name]: e.target.value })
    console.log(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!editFoodItem.name) {
      formErrors.name = "Name is required"
    }

    if (!editFoodItem.quantity) {
      formErrors.quantity = "Quantity is required"
    }

    if (!editFoodItem.expiration_date) {
      formErrors.expiration_date = "Expiration date is required"
    }

    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
      console.log(editFoodItem, id, updateFoodItem);
      updateFoodItem(editFoodItem, id);
      toggleModal();
      navigate(`/fooditemshow/${id}`);
    }
  }

  if (editFoodItem) {
  
  return (
    <Modal isOpen={isOpen} toggle={toggleEditModal}>
      <ModalHeader toggle={toggleEditModal}>Edit Food Item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label style={{ width: "150px" }} for="name">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              value={editFoodItem?.name || ""}
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </FormGroup>
          <FormGroup>
            <Label style={{ width: "150px" }} for="quantity">
              Quantity
            </Label>
            <Input
              id="quantity"
              name="quantity"
              type="text"
              onChange={handleChange}
              value={editFoodItem?.quantity || ""}
            />
            {errors.quantity && <div className="text-danger">{errors.quantity}</div>}
          </FormGroup>
          <FormGroup>
            <Label style={{ width: "150px" }} for="expiration_date">
              Expiration date
            </Label>
            <Input
              id="expiration_date"
              name="expiration_date"
              type="text"
              onChange={handleChange}
              value={editFoodItem?.expiration_date || ""}
            />
            {errors.expiration_date && (
              <div className="text-danger">{errors.expiration_date}</div>
            )}
          </FormGroup>
          <FormGroup>
            <Label style={{ width: "150px" }} for="location">
              Location
            </Label>
            <Input
              name="location"
              type="text"
              onChange={handleChange}
              value={editFoodItem?.location || ""}
            />
          </FormGroup>
          <FormGroup>
            <Label style={{ width: "150px" }} for="image">
              Image
            </Label>
            <Input
              name="image"
              type="text"
              onChange={handleChange}
              value={editFoodItem?.image || ""}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleSubmit}>
          Save
        </Button>
        <Button color="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>   
  )}
}
              
export default FoodItemEditModal