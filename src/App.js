import './App.css';
import Unfluke from './components/Unfluke/Unfluke';
import Leader from './components/Leader/Leader.js';
import Tbody from './components/Table/Tbody.js';
import BB from './components/BB/BB.js';

function App() {
  return (
    <>
      <Unfluke />
      <Leader />
      <div className='borderBBT'>
        <BB />
        <Tbody />
      </div>
    </>
  );
}

export default App;