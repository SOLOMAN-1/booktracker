import logo from './logo.svg';
import './App.css';
import { BookProvider } from './BookContext';
import { LoggerProvider } from './LoggerContext';
import { BookList } from './BookList';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <LoggerProvider>
          <BookList>
          </BookList>
        </LoggerProvider>
      </BookProvider>
    </div>
  );
}

export default App;
