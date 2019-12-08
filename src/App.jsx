import React from 'react';
import CCshop from './components/CCshop'
import './App.css';
import item from './item'

function App() {

  const JudoBelt = new item(1, "Judo Belt", 15, "/images/JudoBelt.jpg");
  const JudoOutfit = new item(2, "Judo Outfit", 110, "/images/JudoOutfit.jpg");
  const pans = new item(3, "Adidas Pans", 22, "/images/AdidasPans.jpg");
  const TShirt = new item(4, "Philadelphia Eagles T-Shirt", 19, "/images/Tshirt.jpg");
  
 let itemsList1 = [ JudoBelt, JudoOutfit, pans, TShirt ];
  
  

  return (
    <div className="App">
      <CCshop itemsList={itemsList1}/>
    </div>
  );
}

export default App;
