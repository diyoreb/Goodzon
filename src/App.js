import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader'
import MiddleHeader from './components/MiddleHeader';
import BottomHeader from './components/BottomHeader';
import Carusel from './components/carusel/Carusel'
import CardCarusel from './components/card/CardCarusel';
import RightButton  from './components/RightButton'
import CaruselBrend from  "./components/CoruselBrend"
function App() {
  return (
    <div className="App">
      <TopHeader/>
      <MiddleHeader/>
      <BottomHeader/>
      <Carusel/>
       <CardCarusel/>
       <RightButton/>
       <CaruselBrend/>
    </div>
  );
}

export default App;
