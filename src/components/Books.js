import React, { useContext } from 'react';
import { Book } from './Book';
import { BookContext } from '../context/BookContext';

export const Books = () => {
  const [books] = useContext(BookContext);
  return (
    <div>
      {books.map((book) => (
        <Book key={Math.random() * 1000} book={book} />
      ))}
    </div>
  );
};
