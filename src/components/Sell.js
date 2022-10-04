import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Navbar, Button } from "reactstrap";
import Navv from "./Navv";
import Footer from "./Footer";
const Sell = () => {
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    //Set local storage
    // if(api.response == success)
    //   localStorage.setItem("auth", true);
  };
  const [formData, setFormData] = useState({
    email: "",
  });
  return (
    <div>
      <Navv />
      <h4>Sell a product</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            id="Email"
            name="email"
            placeholder="Enter your registered email here"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
      <Footer />
    </div>
  );
};

export default Sell;