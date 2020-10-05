import React from "react";
import { Form } from "react-bootstrap";

function InputField(props) {
  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          name={props.name}
        />
      </Form.Group>
    </div>
  );
}

export default InputField;
