import './App.css';
import Render from './components/RenderUI/Render';
import {products} from './components/RenderUI/data';

products.forEach( product => {
  console.log(product.name);
})

function App() {
  return (
    <div className="App">
      {products.map( product => (
        <Render 
          img={product.image}
          name={product.name}
          desc={product.desc}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
