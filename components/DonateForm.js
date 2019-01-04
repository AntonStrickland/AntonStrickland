import React, {Component} from 'react';
import { Form, Button, Input, Message, Grid } from 'semantic-ui-react';
import donate from '../ethereum/donate';
import web3 from '../ethereum/web3';
import { Router } from '../server/routes';

class DonateForm extends Component {

  state = {
    value: '',
    currentBalance: '',
    totalBalance: '',
    totalDonations: '',
    errorMessage: '',
    isAdmin: false,
    loading: false,
    loadingWithdraw: false
  };

  async componentDidMount() {

    const adminAddress = await donate.methods.admin().call();
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];

    const isAdmin = userAddress == adminAddress;
    this.setState({isAdmin});

    const summary = await donate.methods.getSummary().call();

    this.setState({
      currentBalance: web3.utils.fromWei(summary[0], 'ether'),
      totalBalance: web3.utils.fromWei(summary[1], 'ether'),
      totalDonations: summary[2]
    });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({loading: true, errorMessage: ''});

    try {
      const accounts = await web3.eth.getAccounts();
      await donate.methods.donate().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      sendEmail(process.env.MAIL_ADDRESS, 'Donation received!',
      'Someone just sent a donation to your smart contract!');

      Router.replaceRoute(`/`);
    } catch (err) {
      this.setState({errorMessage: err.message});
    }

    this.setState({loading: false, value: ''});

  };

  onWithdraw = async (event) => {

    event.preventDefault();

    this.setState({loadingWithdraw: true, errorMessage: ''});

    try {
      const accounts = await web3.eth.getAccounts();
      await donate.methods.withdraw().send({
        from: accounts[0],
      });

      Router.replaceRoute(`/`);
    } catch (err) {
      this.setState({errorMessage: err.message});
    }

    this.setState({loadingWithdraw: false, value: ''});

  }

  render() {

    // Only render the withdraw button if user is the admin
    const isAdmin = this.state.isAdmin;
    let withdrawButton;

    if (isAdmin) {
      withdrawButton = <Button floated="right" loading={this.state.loadingWithdraw}
      onClick={this.onWithdraw} primary>Withdraw</Button>;
    }
    else {
      withdrawButton = <p> </p>
    }

    // Render the form
    return(

      <div>

      <Grid>
        <Grid.Row>
          <Grid.Column width = {10}>
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

          <Button loading={this.state.loading} primary>Donate</Button>
          <Message error header="Oops!" content={this.state.errorMessage} />
          {withdrawButton}
          </Form>

          </Grid.Column>
          <Grid.Column width = {6}>
          <h3>Fun Facts</h3>
          <p><b>Current Balance: {this.state.currentBalance} ether</b></p>
          <p><b>Total Balance: {this.state.totalBalance} ether</b></p>
          <p><b>Total Donations: {this.state.totalDonations}</b></p>
          </Grid.Column>
        </Grid.Row>
      </Grid>


      </div>


    );

  }
}

export default DonateForm;
