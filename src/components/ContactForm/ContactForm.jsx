import { Component } from 'react';
import {
  Form,
  Input,
  ContactFormButton,
  ContactFormTitle,
} from './ContactForm.styled';
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
    const isValidatedForm = this.validateForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    if (!name || !number) {
      alert('Some fields are empty');
      return false;
    }
  };

  render() {
    return (
      <>
        <ContactFormTitle>Phonebook</ContactFormTitle>
        <Form onSubmit={this.handleFormSubmit}>
          <label>
            Name
            <Input
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleInputChange}
            ></Input>
          </label>
          <label>
            Number
            <Input
              type="tel"
              name="number"
              placeholder="Enter phone number"
              value={this.state.number}
              onChange={this.handleInputChange}
            ></Input>
          </label>
          <ContactFormButton type="submit">Add contact</ContactFormButton>
        </Form>
      </>
    );
  }
}

export default ContactForm;
