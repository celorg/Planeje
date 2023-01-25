import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

//Components
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

//pages
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import NewProject from './pages/NewProject/NewProject';
import Project from './pages/Project/Project';
import About from './pages/About/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/projetos' element={<Projects />} />
            <Route path='/novoprojeto' element={<NewProject />} />
            <Route path='/projetos/:id' element={<Project />} />
            <Route path='/sobre' element={<About/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
