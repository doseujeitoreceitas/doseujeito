import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Pages/Home/Home';
import { Receita } from './Pages/Receita/Receita';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/receita/:id' element={<Receita/>}/> 
      </Routes>
    </Layout>

  );
}

export default App;
