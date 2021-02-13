//import logo from './logo.svg';
import './App.css';
const citylist=[
{ name: 'Goa', country: 'India'},
{ name: 'Amsterdam', country: 'Netherlands' },
{ name: 'New York', country: 'USA' },
{ name: 'Darjeeling', country: 'India' },
{ name: 'Tokyo', country: 'Japan' },
{ name: 'Lonavala', country: 'India' }
];

function App() {

  return (
  
    <div>
     {citylist.filter(person => person.country==="India").map(filteredPerson => (
    <li>
      {filteredPerson.name}
    </li>
    ))};
    </div>
  );
}

export default App;
