import { useState } from "react";
import Profile from "./components/Profile";
import './App.css';
import ProductList from "./components/ProductList";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <Profile firstname="John" lastname="Doe"/>
      <ProductList />
    </div>
  )
}

export default App;