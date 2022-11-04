import Footer from './components/Footer';
import './index.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;