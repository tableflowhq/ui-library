import React from 'react';
import ToggleFilter from './index';

export default {
  title: 'Components/ToggleFilter',
  component: ToggleFilter,
  argTypes: {
    options: {
      control: {
        type: 'object'
      }
    },
    onChange: { action: 'changed' }
  }
};

export const Default = () => (
  <ToggleFilter 
    options={[
      { label: 'Option 1', selected: true },
      { label: 'Option 2', selected: false },
      { label: 'Option 3', selected: false, color: "#F04438" }
    ]}
    onChange={(option) => console.log(option)}
  />
);

export const WithCustomOptions = () => (
  <ToggleFilter 
    options={[
      { label: 'Custom 1', selected: false },
      { label: 'Custom 2', selected: true }
    ]}
    onChange={(option) => console.log(option)}
  />
);
