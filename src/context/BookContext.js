import React, { useState, createContext } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      name: 'An Imperial Affliction',
      price: '$10',
    },
    {
      name: "Drake's book",
      price: '$10',
    },
    {
      name: 'In pursuit of academic excellence',
      price: '$10',
    },
  ]);
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {children}
    </BookContext.Provider>
  );
};
