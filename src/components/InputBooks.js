import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';

export const InputBooks = () => {
  const [books, setBooks] = useContext(BookContext);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const onClick = () => {
    if (!name || !price) {
      alert('Fill the name and price appropriately, please');
    } else {
      setBooks(() => [...books, { name, price: '$'.concat(price) }]);
      setName('');
      setPrice('');
    }
  };
  return (
    <div style={{ width: '100%' }}>
      <input
        type='text'
        placeholder="Enter Book's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '43%', height: '35px' }}
      />
      <input
        type='number'
        placeholder="Enter Book's price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: '43%', height: '35px' }}
      />
      <input
        type='button'
        value='Enter'
        onClick={onClick}
        style={{ width: '14%', height: '35px' }}
      />
    </div>
  );
};
