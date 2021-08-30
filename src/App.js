import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {React, useState} from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
    <Router>
      <Navbar />
        <Switch>
        <Route>
          <ImageGrid setSelectedImg={setSelectedImg} />
          { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </Route>
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
