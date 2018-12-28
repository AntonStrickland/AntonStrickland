import React, {Component} from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import donate from '../ethereum/donate';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class DonateForm extends Component {

  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    console.log(process.env.DONATE_ADDRESS)

    this.setState({loading: true, errorMessage: ''});

    try {
      const accounts = await web3.eth.getAccounts();
      await donate.methods.donate().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      Router.replaceRoute(`/`);
    } catch (err) {
      this.setState({errorMessage: err.message});
    }

    this.setState({loading: false, value: ''});

  };


  render() {

    return(

      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

      <Form.Field>
        <label>Amount to Donate</label>
        <Input
        value={this.state.value}
        onChange={event=>this.setState({value: event.target.value})}
        label="ether"
        labelPosition="right"
        />
      </Form.Field>

      <Button loading={this.state.loading} primary>Donate!</Button>
      <Message error header="Oops!" content={this.state.errorMessage} />
      </Form>


    );

  }
}

export default DonateForm;
