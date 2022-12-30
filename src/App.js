import './App.css';
import Navbar from './components/Navbar';
import Journey from './components/Journey';
import data from './data';

function App() {
  const journeyData = data.map((item) => {
    return (
      <Journey 
        id={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className='journey-list'>
      {journeyData}
      </div>
    </div>

  )
}

export default App;
