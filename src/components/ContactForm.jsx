import React, { Component } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
`;

const Label = styled.label`
  font-weight: bold;
  color: #007bff;
`;

const Input = styled.input`
  margin: 5px;
  padding: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="number">Number:</Label>
          <Input
            type="tel"
            id="number"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
        </FormGroup>
        <Button type="submit">Add contact</Button>
      </FormWrapper>
    );
  }
}

export default ContactForm;
