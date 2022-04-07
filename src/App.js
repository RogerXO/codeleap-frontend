import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainScreen from './components/pages/MainScreen';
import SignUpPage from './components/pages/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/mainScreen' element={<MainScreen />} />
      </Routes>
    </Router>
  )
}

export default App;
