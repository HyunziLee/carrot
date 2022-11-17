import './App.css';
import MainContainer from './components/unit/main/main.container';
import { Routes, Route, Link } from 'react-router-dom'
import UploadContainer from './components/unit/upload/upload.container';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <MainContainer /> } />
      <Route path="/upload" element={ <UploadContainer /> } />
     
    </Routes>
  )
}

export default App;
