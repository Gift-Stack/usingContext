import './App.css';
import { NavBar } from './components/NavBar';
import { Books } from './components/Books';
import { InputBooks } from './components/InputBooks';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <BookProvider>
      <NavBar />
      <InputBooks />
      <Books />
    </BookProvider>
  );
}

export default App;
