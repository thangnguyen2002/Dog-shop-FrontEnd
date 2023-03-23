import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home';
import DogsPage from './components/Dogs/DogPage';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios' //package get data from backend server
import { CartContext } from './components/Contexts/CardContext';

function App() {
  // moi log ra thoi chua lam gi, ta can luu giu data lai => useState
  const [allDogs, setAllDogs] = useState([]) //ban dau se la 1 array rong
  const [myCart, addToCart] = useState([{}])
  const [total, setTotal] = useState(0)

  // moi khi load trang se load data tu server => userEffect
  useEffect(() => {
    async function getData() {
      const res = await axios.get('/v1/dogs') //link dẫn đến data tu server, lay data -> ton tgian -> await
      return res
    } 
    // getData().then((res) => console.log(res.data))
    getData().then((res) => setAllDogs(res.data)) //khi set data cho setAllDogs se~ vao tk allDogs, luu ao allDogs
    getData().catch((err) => console.log(err)) //de phong servr loi
  }, [])

  return (
    // reactContext
    <CartContext.Provider value={{myCart, addToCart, total, setTotal}}> 
      <Router>
        <NavBar/>
        <div className="page-container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dogs' element={<DogsPage allDogs={allDogs}/>}/>
            <Route path='/checkout' element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
