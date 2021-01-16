import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

export const NavBar = () => {
  const [books] = useContext(BookContext);
  return (
    <nav style={style}>
      <h3>Gifted BookStore</h3>
      <p>Amount of Books: {books.length}</p>
    </nav>
  );
};

const style = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'slateblue',
  padding: '10px',
};
