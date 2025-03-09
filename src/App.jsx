import "./App.css";
import { MantineProvider } from '@mantine/core'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className="App">
            <div className="blur" style={{top: '-18%', right: '0'}}></div>
            <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
