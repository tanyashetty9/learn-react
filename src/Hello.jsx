import React from 'react';

export const Hello = () => {
  return (
    <div id="container">
      <h1> mee</h1>
    </div>
  );
};

export const HelloWithoutJSX = () => {
  return React.createElement(
    'div',
    { id: 'constainer' },
    React.createElement('h1', null, 'Hello meee')
  );
};
