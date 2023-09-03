import React from 'react';
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

const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onNameChange}
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
          onChange={onNumberChange}
        />
      </FormGroup>
      <Button type="submit">Add contact</Button>
    </FormWrapper>
  );
};

export default ContactForm;
