import './App.css';
import image from './grocerytop.jpg';
import image2 from './grocerydown.webp';
import { GroceryList } from './grocerylist';


function App() {
  return (
    <div className='app'>

      <div className='container'>
        <img src={image} width='250px' alt='toppicture' />
      </div>

  <div className='container'>
    <h1>Grocery List</h1>
    </div>

    <GroceryList />
    

    <div className='container'>
    <img src={image2} width='250px' alt='downpicture' />
    </div>
  
  </div>
  );
}

export default App;
