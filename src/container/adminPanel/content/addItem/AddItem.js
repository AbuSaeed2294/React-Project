import React, { Component } from "react";
import { Form } from "react-bootstrap";
import CustomButton from "../../../../components/customButton/CustomButton";
import InputField from "../../../../components/inputField/InputField";

export class AddItem extends Component {
  render() {
    return (
      <div>
        <Form>
          <InputField label="Name" type="text" placeholder="Item Name" />
          <InputField label="Id" type="text" placeholder="ID" />
          <InputField label="Price" type="Number" placeholder="Price" />
          <InputField label="Date" type="date" />
          <CustomButton title="Add" />
        </Form>
      </div>
    );
  }
}

export default AddItem;
