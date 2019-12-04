import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import{Container} from 'rsuite'; 
import NavMultiLevel from './components/NavMultiLevel';

function App() {
  return (
    <div className="App">
      <Container>
        <NavMultiLevel/>
      </Container>
    </div>
  );
}

export default App;
