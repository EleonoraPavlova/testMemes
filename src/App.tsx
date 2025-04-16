import './App.css'

import {Route, Routes} from 'react-router-dom';

import NavbarHeroui from "./components/navBar";
import ListPage from "./pages/list-page";
import TablePage from "./pages/table-page";

const App = () => {
 return (
  <>
   <NavbarHeroui/>
   <main>
    <Routes>
     <Route path="/table" element={<TablePage/>}/>
     <Route path="/list" element={<ListPage/>}/>
     <Route path="*" element={<TablePage/>}/>
    </Routes>
   </main>
  </>
 );
};

export default App;
