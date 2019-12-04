import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import{Container} from 'rsuite'; 
import NavMultiLevel from './components/NavMultiLevel';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <Container>
        <NavMultiLevel/>
        <ProductsList/>
      </Container>
    </div>
  );
}

export default App;
