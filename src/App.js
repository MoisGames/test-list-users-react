import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import SideBar from './components/SideBar'
import ListUser from './pages/ListUser';

function App() {
  return (

    <div className="App">
      <SideBar />
      <Routes>
        <Route path='/' element={<ListUser />} />
        <Route path='/users' element={<ListUser />} />
        <Route path='*' element={<ListUser />} />
      </Routes>
    </div>
  );
}

export default App;
