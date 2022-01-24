import Index from './pages/index';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './styles/styles.css';
import Pug from './pages/Pug';
import Layout from 'layouts/Layout';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/pug" element={<Pug/>}/>
            <Route path="/"element={<Index/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
        );
}

/*Con la version V6 así se hace me parece un poco más complicado pero qué se le hace. Ya nos e usan children */

export default App;
