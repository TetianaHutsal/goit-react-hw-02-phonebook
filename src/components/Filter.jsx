import React from 'react';

const Filter = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Find contact by name"
  />
);

export default Filter;
