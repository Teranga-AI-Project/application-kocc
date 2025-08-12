import { Summary } from "./pages/Summary";
import { Transcription } from "./pages/Transcription";
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Layout from "./components/Layout";
import Translation from "./pages/Translation";

function App() {
  return (
    <div className='min-h-screen'>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Transcription />} />
          <Route path="summary" element={<Summary />} />
          <Route path='transcription' element={<Transcription />} />
          <Route path='translation' element={<Translation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App