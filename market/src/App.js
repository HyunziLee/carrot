import './App.css';
import MainContainer from './components/unit/main/main.container';
import { Routes, Route, Link } from 'react-router-dom'
import UploadContainer from './components/unit/upload/upload.container';
import SignUpContainer from './components/unit/signup/signup.container';
import SignInContainer from './components/unit/signin/signin.container';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <MainContainer /> } />
      <Route path="/upload" element={ <UploadContainer /> } />
      <Route path='/signup' element={<SignUpContainer />} />
      <Route path='/signin' element={<SignInContainer />} />
     
    </Routes>

  )
}

export default App;
