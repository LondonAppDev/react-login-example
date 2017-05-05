import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20
}

class LoginForm extends Component {

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="LoginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="password" />
            </FormGroup>
            <FormGroup controlId="formSubmit">
              <Button type="submit">
                Login
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default LoginForm;
