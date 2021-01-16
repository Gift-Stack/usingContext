import React from 'react';

export const Book = ({ book }) => {
  return (
    <div style={style}>
      <div>{book.name}</div>
      <br />
      <div>{book.price}</div>
    </div>
  );
};
const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // marginTop: '20px',
  borderBottom: '1px dotted grey',
  padding: '10px 0',
  textAlign: 'center',
  backgroundColor: 'lightgrey',
};
