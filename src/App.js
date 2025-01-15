import './App.css';
import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainOne from './Components/MainOne';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainOne />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
