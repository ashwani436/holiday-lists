//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const citylist = [{ name: 'Goa', country: 'India' },
{ name: 'Amsterdam', country: 'Netherlands' },
{ name: 'New York', country: 'USA' },
{ name: 'Darjeeling', country: 'India' },
{ name: 'Tokyo', country: 'Japan' },
{ name: 'Lonavala', country: 'India' }
]

function App(){
 //const[state,setState]=useState(1);
  return (
    
    <div>
     {citylist.filter(person => person.country==="India").map(filteredPerson => (
     
    <ol style={{listStyleType:"number"}}>
       
    <li>{filteredPerson.name}</li>
  </ol>
   
    ))
    
    };
    
    </div>
  );
  
}

export default App;
