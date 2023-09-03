import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 15px;

  &:hover {
    background-color: #c82333;
  }
`;

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
