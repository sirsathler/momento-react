import Login from './pages/login/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ResponseInterceptor } from './services/interceptors/ResponseInterceptor';
import AuthDiscord from './pages/authdiscord/AuthDiscord';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponseInterceptor />
        <Routes>
          <Route path="/" exact element={<>teste</>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/auth" exact element={<AuthDiscord />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;