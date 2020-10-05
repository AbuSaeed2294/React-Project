import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Row, ListGroup, Tab } from "react-bootstrap";
import UpdateItem from "../content/updateItem/UpdateItem";
import CheckItem from "../content/checkItem/CheckItem";
import DogBreeds from "../../homeDogBreeds";
import RemoveFavoritesDogs from "../../favorites/Favorites";

export class SideBar extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={2}>
              <ListGroup>
                {/* **** AddItem  */}
                <ListGroup.Item action href="#addItem">
                  Dog Breeds
                </ListGroup.Item>

                {/* **** DeleteItem  */}
                <ListGroup.Item className="mt-3" action href="#deleteItem">
                  Favorite
                </ListGroup.Item>

                {/* **** UpdateItem  */}
                <ListGroup.Item className="mt-3" action href="#update-item">
                  Update Items
                </ListGroup.Item>

                {/* **** CheckItem  */}
                <ListGroup.Item className="mt-3" action href="#check-item">
                  Check Items
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                {/* ********** AddItem component will run  */}
                <Tab.Pane eventKey="#addItem">
                  {/* <DogBreedsList /> */}
                  <DogBreeds />
                </Tab.Pane>

                {/* ********** Delete Item component will run  */}
                <Tab.Pane eventKey="#deleteItem">
                  <RemoveFavoritesDogs />
                </Tab.Pane>

                {/* ********** UpdateItem component will run  */}
                <Tab.Pane eventKey="#updateItem">
                  <UpdateItem />
                </Tab.Pane>

                {/* ********** CheckItem component will run  */}
                <Tab.Pane eventKey="#checkItem">
                  <CheckItem />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default SideBar;
