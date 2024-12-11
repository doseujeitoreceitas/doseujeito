import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Pages/Home/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/> 
      </Routes>
    </Layout>

  );
}

export default App;
