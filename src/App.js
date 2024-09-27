import './App.css';
import Home from './components/home';
import Login from './components/login';
import About from './components/about';
import Signup from './components/signup';
import Exercise from './components/exercise';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Back from './components/exercise/back';
import Cardio from './components/exercise/cardio';
import Workouts from './components/Workouts';
import Chest from './components/exercise/chest';
import LowerLegs from './components/exercise/lower-legs';
import LowerArms from './components/exercise/lower-arms';
import Neck from './components/exercise/neck';
import Shoulder from './components/exercise/shoulder';
import UpperArms from './components/exercise/upper-arms';
import UpperLegs from './components/exercise/upper-legs';
import Waist from './components/exercise/waist';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/signup">SIGNUP</Link>
            </li>
            <li>
              <Link to="/exercise">EXERCISE</Link>
            </li>
          </ul>
        </nav>

        {/* Wrap all routes inside the <Routes> component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Exercise route */}
          <Route path="/exercise" element={<Exercise />} />
          
          {/* Separate Workouts route */}
          <Route path="/workouts" element={<Workouts />} />
          
          {/* Other exercise-related routes */}
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/chest" element={<Chest />} />
          <Route path="/lower-legs" element={<LowerLegs />} />
          <Route path="/lower-arms" element={<LowerArms />} />
          <Route path="/neck" element={<Neck />} />
          <Route path="/shoulder" element={<Shoulder />} />
          <Route path="/upper-arms" element={<UpperArms />} />
          <Route path="/upper-legs" element={<UpperLegs />} />
          <Route path="/waist" element={<Waist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
