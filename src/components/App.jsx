import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #34753d;
`;

const SubTitle = styled.h2`
  color: #34753d;
`;

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { name, number, filter } = this.state;

    return (
      <AppWrapper>
        <Title>Phonebook</Title>
        <ContactForm
          name={name}
          number={number}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onSubmit={this.handleSubmit}
        />
        <SubTitle>Find contacts by name:</SubTitle>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <SubTitle>Contacts:</SubTitle>
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.handleDeleteContact}
        />
      </AppWrapper>
    );
  }
}

export default App;
