import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm></ContactForm>
      </>
    );
  }
}
