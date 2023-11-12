import { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSumit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { onAdd } = this.props;
    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) {
      return;
    }

    onAdd({ id: nanoid(), name, phone });
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert('Some fields are empty');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };
  render() {
    const { name, phone } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange
        ></input>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange
        ></input>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
