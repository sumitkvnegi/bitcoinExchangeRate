import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Coins from './components/Coins.jsx'
import Exchanges from './components/Exchanges.jsx'
import CoinDetails from './components/CoinDetails.jsx'
function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/coins' element={<Coins/>} />
      <Route path='/exchanges' element={<Exchanges/>} />
      <Route path='/coin/:id' element={<CoinDetails/>} />
    </Routes>
  </Router>
}

export default App;
