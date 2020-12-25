import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
const shundorCSS={
  color:'red',
  backgroundColor:'grey'
}
const name='Thyive Hayder'
  const person={name:'Anon',
job:'Developer'
}
const array1=['Thyive']

const productObject=[
  {name:'Laptop', price:'$70' },
  {name:'Phone',price:'$20'},
  {name:'Tab',price:'$10'}
]

const nayoks=['Salman Shah','Shakib Khan','Arefin Shuvo']


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload automatically.
        </p>
        <Dataload></Dataload>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(element=><li>{element}</li>)
          }
        </ul>

        {
          productObject.map(element=><Products product={element}></Products>)
        }
        {/* <Products product={productObject[0]} ></Products>
        <Products product={productObject[1]}></Products> */}
        
        <PersonComponent name='Hayder' dream='Web Hero'></PersonComponent>
        <PersonComponent name='Anon' dream='React Person'></PersonComponent>
        <PersonComponent name={array1[0]} dream='Good Human'></PersonComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>{person.name} is trying to be a successful person</h2>
       <p style={shundorCSS}>Me {name} is a React Person</p>

       <h3 style={{color:'green',backgroundColor:'lightgrey'}}> One Day I will be a Web Hero (React) In sha Allah</h3>
        
      </header>
    </div>
  );
}

function Counter() {
  const [count,setCount]=useState(10)
  
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}



function Products(props) {
  const styleObject={
    border:'2px solid grey',
    backgroundColor:'black',
    color:'lightsalmon',
    borderRadius:'5px',
    height:'300px',
    width:'200px'
   
   
  }

  const{name,price}=props.product
  
  
    return(
      <div style={styleObject}>
        <h1>{name}</h1>
        <h3>Price:{price}</h3>
        <button>Buy Now</button>
      </div>
    )
  }


function PersonComponent(props) {
  const componentStyle={
    border:'2px solid green',
    width:'600px',
    height:'150px',
    margin:'5px',
    padding:'5px'
    
  }
  return(
   <div style={componentStyle}>
     <h4>Name: {props.name}</h4>
     <p>I want to Be a {props.dream} </p>
   </div>
  )
}


function Dataload() {
    const [users,setUser]=useState([])
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setUser(data))
   })

  return(
    <div>
      <h1>Dynamic Users: {users.length} </h1>
      <ul>
        {users.map(element=><li>{element.name}</li>)}
      </ul>
    </div>
  )
}


export default App;

