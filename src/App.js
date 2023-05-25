import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'Photoshop', price: '$220'},
    {name: 'Illustrator', price: '$299'},
    {name: 'After Effects', price: '$650'},
    {name: 'Adobe Express', price: '$450'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React.js</h1>
        <Counter></Counter>
        {
          products.map(product => <Product name={product.name} price={product.price}></Product>)
        }
        <Users></Users>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h1>Total users: {users.length}</h1>
      <ul>
        {
          users.map((user) => <li> {user.name} </li>)
          
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount]= useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}


function Product(props){
  const productStyle={
    backgroundColor:'lightgray',
    padding:'10px',
    color:'black',
    borderRadius: '5px',
    margin:'10px',
    width: '200px'
  }
  return(
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button>Buy Now!</button>
    </div>
  )
}


export default App;
