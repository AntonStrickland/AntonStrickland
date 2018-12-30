import React, {Component} from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../server/routes';
import Axios from 'axios';

class ContactForm extends Component {

  state = {
    email: '',
    name: '',
    subject: '',
    message: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    try {

      const email = this.state.email;
      const name = this.state.name;
      const subject = this.state.subject;
      const message = this.state.message;

      this.setState({
        name: '',
        email: '',
        subject: '',
        message: ''});

      const response = await Axios.post('/contact', {
        email: email,
        name: name,
        subject: subject,
        message: message
      });

    } catch (e) {
      this.setState({errorMessage: e.message});
    }

  };


  render() {

    return(

      <Form onSubmit={this.onSubmit.bind(this)} method="POST"
      error={!!this.state.errorMessage}>

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
        <label>Subject</label>
        <Input
        value={this.state.subject}
        onChange={event=>this.setState({subject: event.target.value})}
        />
      </Form.Field>

      <Form.Field>
        <label>Message</label>
        <Form.TextArea
        placeholder="Enter message"
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
