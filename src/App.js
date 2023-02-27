import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './contexts/ProtectedRoute';

import Auth from './pages/auth/Auth';
import { AuthProvider } from './contexts/AuthProvider';
import { ResponseInterceptor } from './services/interceptors/ResponseInterceptor';

import UserSelect from './pages/user-select/UserSelect';
import Login from './pages/login/Login';

function App() {

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap" rel="stylesheet" />
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <ResponseInterceptor />
            <Routes>
              <Route path="/" exact element={<ProtectedRoute><UserSelect /></ProtectedRoute>} />
              <Route path="/ata" exact element={<ProtectedRoute>{<>ta</>}</ProtectedRoute>} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/auth" exact element={<Auth />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div >
    </>
  );
}

export default App;