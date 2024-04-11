import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recorder from "./components/recorder";
import Layout from './components/layout/baselayout';
import Login from './components/login';
import Commands from './components/commands/commands';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="recorder" element={<Recorder />} />
              <Route path="commands" element={<Commands />} />
            </Route>
          </Routes>
        </Router>
     );
};

export default App;
