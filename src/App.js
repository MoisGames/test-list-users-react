import './App.scss';
import { Routes, Route, } from 'react-router-dom';
import SideBar from './components/SideBar'
import ListUser from './pages/ListUserPage';
import ProfileUserPage from './pages/ProfileUserPage';

function App() {
  return (

    <div className="App">
      <SideBar />
      <Routes>
        <Route path='/' element={<ListUser />} />
        <Route path='/users' element={<ListUser />} />
        <Route path='/users/:id' element={<ProfileUserPage />} />
        <Route path='*' element={<ListUser />} />
      </Routes>
    </div>
  );
}

export default App;
