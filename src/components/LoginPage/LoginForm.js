import React, { Component } from 'react';
import { Panel, Form } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
}

class LoginForm extends Component {

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="LoginForm">
            <input type="email" placeholder="Email Address" /> <br />
            <input type="password" placeholder="password" /> <br />
            <input type="submit" value="Login" />
          </Form>
        </Panel>
      </div>
    )
  }
}

export default LoginForm;
