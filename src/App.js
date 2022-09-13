import './App.css';
import Render from './components/RenderUI/Render';
import {products} from './components/data/data';
import Count from './components/Counter/Count';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(products);
  const handleDelete = (id) => {
    const newProduct = state.filter((value) => {
      return value.id !== id;
    });

    setState(newProduct)
  }
  return (
    <div className="App">
      <Count />
      {state.map( product => (
        <Render 
          key={product.id}
          img={product.image}
          name={product.name}
          desc={product.desc}
          price={product.price}
          id={product.id}

          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;

