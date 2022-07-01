import './App.css';
import Welcome from './components/Welcome';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/homepage" element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
