<<<<<<< HEAD
// App.js
import React from 'react';
import Navbar from 'navbar'; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* Other components */}
    </div>
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </Router>
>>>>>>> 06485761e263a783b91de606377730e0d9368955
  );
};

export default App;
