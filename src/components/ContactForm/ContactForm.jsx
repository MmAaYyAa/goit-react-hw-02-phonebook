import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value.trim() });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.createContacts(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
