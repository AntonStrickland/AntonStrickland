import React, {Component} from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../server/routes';
import Axios from 'axios';

class TurtleForm extends Component {

  state = {
    address: '',
    amount: '',
    confirmations: '30',
    errorMessage: '',
    loading: false,
	hasDonated: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    try {

      const address = this.state.address;
      const amount = this.state.amount;
      const confirmations = this.state.confirmations;

      if (amount == '')
      {
        this.setState({errorMessage: "Please fill in all fields!"});
      }
      else {

        this.setState({ amount: '' });

        const response = await Axios.post('https://api.turtlepay.io/v1/new', {
          address: 'TRTLuyYpZTiCrii4iW29EvWbVesV8hasy9kWFP5pqoZANNv5x14NvuYexuTASCxivo3EbfzKskf14fLJNnAF6qsXRuooGoKg2DW',
          amount: (amount * 100),
          callback: 'https://antonstrickland.com/turtle',
          confirmations: confirmations
        });
		
		console.log(response)
        this.setState({ hasDonated: true, amount: response.data.amount, address: response.data.sendToAddress });
		
		console.log(response.data.sendToAddress)
		console.log(response.data.amount)

		//Router.replaceRoute(`/thank-you`);
		
      }

    } catch (e) {
      this.setState({errorMessage: "Internal error"});
    }

  };


  render() {
	  
	  
	// Only render the withdraw button if user is the admin
    const hasDonated = this.state.hasDonated;
    let content;

    if (hasDonated) {
		content = <div><p>Thank you for donating!</p><p>Please send {this.state.amount} TRTL to {this.state.address} within 30 minutes.</p></div>
    }
    else {
      content = <div> <p>You can send me some TRTL using the form below:</p>
	  <Form onSubmit={this.onSubmit.bind(this)} method="POST"
      error={!!this.state.errorMessage}>

      <Form.Field>
        <label>How much TRTL do you want to send?</label>
        <Input
        value={this.state.amount}
		label="TRTL"
        labelPosition="right"
        onChange={event=>this.setState({amount: event.target.value})}
        />
      </Form.Field>

      <Button primary >
      <label>Submit</label>
      </Button>

      <Message error header="Oops!" content={this.state.errorMessage} />
      </Form> </div>;
    }
	  

    return(
		content
    );

  }
}

export default TurtleForm;
