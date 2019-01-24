import React, {Component} from 'react';
import { Form, Button, Input, Message, Grid } from 'semantic-ui-react';
import donate from '../ethereum/donate';
import web3 from '../ethereum/web3';
import { Router } from '../server/routes';
import Axios from 'axios';

class AdminForm extends Component {

  state = {
    isAdmin: false,
    loading: false,
    errorMessage: '',
    title: '',
    genre: '',
    company: ''
  };

  async componentDidMount() {

    const adminAddress = await donate.methods.admin().call();
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];

    const isAdmin = userAddress == adminAddress;
    this.setState({isAdmin});
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({loading: true, errorMessage: ''});

    try {

      const title = this.state.title;
      const genre = this.state.genre;
      const company = this.state.company;

      const key = process.env.MONGO_KEY;

      const response = await Axios.post('https://api.mlab.com/api/1/heroku_qzfls547/collections/games?apiKey=' + key, {
        title: title,
        genre: genre,
        company: company,
      });

      Router.replaceRoute(`/`);
    } catch (err) {
      this.setState({errorMessage: err.message});
    }

    this.setState({loading: false, value: ''});

  };

  render() {

    // Only render the withdraw button if user is the admin
    const isAdmin = this.state.isAdmin;
    let withdrawButton;

    if (isAdmin) {

          // Render the form
          return(

            <div>

            <Grid>
              <Grid.Row>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

                <h2>Add Project</h2>

                <Form.Field>
                  <label>Title</label>
                  <Input
                  value={this.state.title}
                  onChange={event=>this.setState({title: event.target.value})}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Genre</label>
                  <Input
                  value={this.state.genre}
                  onChange={event=>this.setState({genre: event.target.value})}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Company</label>
                  <Input
                  value={this.state.company}
                  onChange={event=>this.setState({company: event.target.value})}
                  />
                </Form.Field>

                <Button loading={this.state.loading} primary>Donate</Button>
                <Message error header="Oops!" content={this.state.errorMessage} />

                </Form>

              </Grid.Row>
            </Grid>

            </div>

          );
    }
    else {
      return (
        <div>
        </div>
      );
    }


  }
}

export default AdminForm;
