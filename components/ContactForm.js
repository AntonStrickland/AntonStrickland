import React, {Component} from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../routes';

class ContactForm extends Component {

  state = {
    email: '',
    name: '',
    message: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = (event) => {
    event.preventDefault();

    fetch('/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          message: this.state.message
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success) {
          this.setState({formSent: true})
        }
        else this.setState({formSent: false})
      })
      .catch((error) => {
        console.error(error);
      });

  };


  render() {

    return(

      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

      <Form.Field>
        <label>E-mail</label>
        <Input
        value={this.state.email}
        onChange={event=>this.setState({email: event.target.value})}
        />
      </Form.Field>

      <Form.Field>
        <label>Name</label>
        <Input
        value={this.state.name}
        onChange={event=>this.setState({name: event.target.value})}
        />
      </Form.Field>

      <Form.Field>
        <label>Message</label>
        <Input
        value={this.state.message}
        onChange={event=>this.setState({message: event.target.value})}
        />
      </Form.Field>

      <Button primary >
      <label>Submit</label>
      </Button>


      <Message error header="Oops!" content={this.state.errorMessage} />
      </Form>
    );

  }
}

export default ContactForm;
