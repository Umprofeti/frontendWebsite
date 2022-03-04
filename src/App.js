import './index.css';
import { MainPage } from './Pages/MainPage';
import {Route, Routes } from 'react-router-dom';
import { SinglePage } from './Pages/SinglePage';
import { CategoryPage } from './Pages/CategoryPage';
import { TarifarioRV } from './Pages/TarifarioRV';


function App() {

  return (
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path={`/post/:slug`} element={<SinglePage/>}/>
        <Route path={`/categories/:category`} element={<CategoryPage/>}/>
        <Route path='/tarifario' element={<TarifarioRV/>}/>
      </Routes>
  );
}

export default App;
