import { Route, Routes } from 'react-router-dom';
import Sheets from './pages/table/Sheets';
import Table from './pages/table/Table';
import TrekSheets from './pages/trekKod/TrekSheets';

function App() {
  return (
    <Routes>
      <Route path="/hisobot/:name" element={<Sheets />} />
      <Route path="/trek/:name" element={<TrekSheets />} />
      <Route path="/" element={<Table />} />
    </Routes>
  );
}

export default App;
