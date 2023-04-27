import React, { useState } from "react";
import { Card, CardBody, CardText, CardTitle, Button, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const FoodItemShow = ({foodItems, logged_in, deleteFoodItem}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  let selectedFoodItem = foodItems?.find((foodItem) => foodItem.id === +id);

  const toggleModal = () => setVisible(!visible);

  const handleSubmit = () => {
    const confirmDelete = "Are you sure you want to delete this?";
    if (confirmDelete) {
      deleteFoodItem(selectedFoodItem.id);
      toggleModal();
      navigate("/protectedindex");
    }
  };

  return (
    <>
      <h1>Food Item</h1>
      <br />
      <div className="show-item">
        {selectedFoodItem && (
          <Card>
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
                    <NavLink
                      style={{ color: "white" }}
                      to={`/fooditemedit/${selectedFoodItem?.id}`}
                    >
                      Edit Food Item
                    </NavLink>
                  </Button>
                  <Button onClick={toggleModal}>
                    Remove from Inventory
                  </Button>
                </>
              )}
              <Button>
                <NavLink style={{ color: "white" }} to={"/protectedindex"}>
                  Back to Inventory
                </NavLink>
              </Button>
            </CardBody>
          </Card>
        )}
      </div>
      <Modal isOpen={visible} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Delete Food Item</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this food item?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleSubmit}>
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FoodItemShow;
